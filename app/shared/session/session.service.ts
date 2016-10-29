import { Injectable }   from '@angular/core';

import config           = require('../app-globals');
var CryptoJS            = require('crypto-js');

@Injectable()
export class SessionService
{
    private static sessionName = 'pulsar_session';

    public static set(name: string, value: any): any
    {
        let encryptValue    = sessionStorage.getItem(SessionService.sessionName);
        let pulsarSession   = {};

        if(encryptValue !== null)
        {
            pulsarSession   = JSON.parse(CryptoJS.AES.decrypt(encryptValue, config.key).toString(CryptoJS.enc.Utf8));
        }

        pulsarSession[name] = value;

        encryptValue = CryptoJS.AES.encrypt(JSON.stringify(pulsarSession), config.key);

        console.log(encryptValue);
        sessionStorage.setItem(SessionService.sessionName, encryptValue);

        return value;
    }

    public static get(name: string): any
    {
        //let encryptValue    = Cookie.get(SessionService.sessionName);
        let encryptValue    = sessionStorage.getItem(SessionService.sessionName);

        if(encryptValue === null)
            return null;

        let pulsarSession   = JSON.parse(CryptoJS.AES.decrypt(encryptValue, config.key).toString(CryptoJS.enc.Utf8));

        if(typeof pulsarSession[name] === 'undefined')
        {
            return null;
        }
        else
        {
            return pulsarSession[name];
        }
    }

    public static delete(name: string): boolean
    {
        //let encryptValue    = Cookie.get(SessionService.sessionName);
        let encryptValue    = sessionStorage.getItem(SessionService.sessionName);

        if(encryptValue === null)
            return false;

        let pulsarSession   = JSON.parse(CryptoJS.AES.decrypt(encryptValue, config.key).toString(CryptoJS.enc.Utf8));

        if(typeof pulsarSession[name] === 'undefined')
        {
            return false;
        }
        else
        {
            delete pulsarSession[name];

            encryptValue = CryptoJS.AES.encrypt(JSON.stringify(pulsarSession), config.key);

            //Cookie.set(SessionService.sessionName, encryptValue, 1, '/');
            sessionStorage.setItem(SessionService.sessionName, encryptValue);

            return true;
        }
    }

    public static destroy(): void
    {
        //Cookie.delete(SessionService.sessionName);
        sessionStorage.removeItem(SessionService.sessionName)
    }

    public static has(name: string): boolean
    {
        //let encryptValue = Cookie.get(SessionService.sessionName);
        let encryptValue = sessionStorage.getItem(SessionService.sessionName);

        if(encryptValue === null)
            return false;

        let pulsarSession = JSON.parse(CryptoJS.AES.decrypt(encryptValue, config.key).toString(CryptoJS.enc.Utf8));

        return typeof pulsarSession[name] === 'undefined';
    }

    public static all(): Object
    {
        //let encryptValue    = Cookie.get(SessionService.sessionName);
        let encryptValue = sessionStorage.getItem(SessionService.sessionName);

        if(encryptValue === null)
            return null;

        let pulsarSession = JSON.parse(CryptoJS.AES.decrypt(encryptValue, config.key).toString(CryptoJS.enc.Utf8));

        if(typeof pulsarSession === 'undefined')
        {
            return null;
        }
        else
        {
            return pulsarSession;
        }
    }
}