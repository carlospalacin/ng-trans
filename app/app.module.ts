import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { HttpModule}            from '@angular/http';
import { AppComponent }         from './app.component';

import { TranslatorService }    from './shared/translator/translator.service';

@NgModule({
    imports:        [ 
        BrowserModule,
        HttpModule
    ],
    declarations:   [
        AppComponent 
    ],
    providers:      [ 
        TranslatorService 
    ],
    bootstrap:      [ 
        AppComponent 
    ]
})

export class AppModule { }