import { Injectable }               from '@angular/core';
import { Http, Response }           from '@angular/http';

import { Translation }              from './translation.model';

import { Observable }               from 'rxjs/Observable';

import { TranslatorParser }         from './translator-parser';
import { TranslationCollection }    from './translation-collection.model';
import { TranslationParameters }    from './translation-parameters.model';

/**
 *  Translator service
 */
@Injectable()
export class TranslatorService
{
    private locale: string = document['locale'] as string;
    private collections: TranslationCollection[] = [];
    private isLoading: boolean = false;
    private translatorParser: TranslatorParser = new TranslatorParser();
    private templateMatcher: RegExp = /{{\s?([^{}\s]*)\s?}}/g;

    constructor(
        private http: Http
    ){}

    /**
     * Load translations files
     *
     * @param       module          Module name to load translations, if module if empty, record TranslationCollection with root index
     * @param       checkOverload   Flag to manage overload, and first angular 2 load, are many request, by hooks lifecycle, to render views, this request cause overload, if we don't control
     */
    private load(module: string, checkOverload: boolean): boolean
    {
        if(this.isLoading && checkOverload)
            return null;

        let urlModule = '';
        if(module !== 'root')
            urlModule = module + '/';

        if(checkOverload)
            this.isLoading = true;

        this.http
            .get('app/' + urlModule + 'translations/' + this.locale + '.json')
            .subscribe(
                (response) => { 
                    var isFound = false;
                    this.collections.find((translationCollection: TranslationCollection, index) => {
                        if(translationCollection.module === module )
                        {
                            // overwritte module translation collection
                            this.collections[index] = ({ module: module, translations: response.json() } as TranslationCollection);
                            return isFound = true;
                        }
                    });

                    // Add new translationCollection
                    if(! isFound)
                        this.collections.push({ module: module, translations: response.json() } as TranslationCollection);

                    if(checkOverload)
                        this.isLoading = false;

                    return true;
                }
            );
    }

    /**
     * Function to get translation from a key
     */
    public get(key: string, params?: any): string
    {
        return this.getTranslation(key, params);
    }

    /**
     * Function to get translation from a keys with pluralization
     */
    public getChoice(key: string, n: number, params?: any): string
    {
        let translation = this.getTranslation(key, params);

        if(typeof translation == 'string')
        {
            let choices = translation.split('|');

            if(n > 1)
            {
                return choices[1]
            }
            else
            {
                return choices[0]
            }
        }
        return null;
    }

    /**
     * Function to change language
     * @param lang
     */
    public change(lang: string): boolean
    {
        if(this.locale === lang)
            return true;

        // change locale selection
        this.locale = lang;

        // for each module, fetch translation data
        for(let translationCollection of this.collections)
        {
            this.load(translationCollection.module, false);
        }
        return true;
    }

    /**
     * Function to get translation
     */
    private getTranslation(key: string, params?: any): string
    {
        let translationParameters = this.getTranslationParameters(key);

        // get translations from module
        var translationCollection = this.collections.find((translationCollection: TranslationCollection) => { return translationCollection.module == translationParameters.module });

        if(translationCollection)
        {
            var translation: Translation = translationCollection.translations.find((translation: Translation) => { return translation.key === translationParameters.index });

            return this.translatorParser.interpolate(translation.value, params);
        }
        else
        {
            this.load(translationParameters.module, true);
            return null;
        }
    }

    /**
     * Function to get parameters module and key, from initial key
     */
    private getTranslationParameters(key: string): TranslationParameters
    {
        let index       = null;
        let module      = null;

        if(key.indexOf('::') !== -1)
        {
            index   = key.substring(key.indexOf('::') + 2, key.length);
            module  = key.substring(0, key.indexOf('::'));
        }
        else
        {
            index   = key;
            module  = 'root';
        }

        return {
            index: index,
            module: module
        } as TranslationParameters;
    }
}