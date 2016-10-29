"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var config = require('../app-globals');
var CryptoJS = require('crypto-js');
var SessionService = (function () {
    function SessionService() {
    }
    SessionService.set = function (name, value) {
        var encryptValue = sessionStorage.getItem(SessionService.sessionName);
        var pulsarSession = {};
        if (encryptValue !== null) {
            pulsarSession = JSON.parse(CryptoJS.AES.decrypt(encryptValue, config.key).toString(CryptoJS.enc.Utf8));
        }
        pulsarSession[name] = value;
        encryptValue = CryptoJS.AES.encrypt(JSON.stringify(pulsarSession), config.key);
        console.log(encryptValue);
        sessionStorage.setItem(SessionService.sessionName, encryptValue);
        return value;
    };
    SessionService.get = function (name) {
        //let encryptValue    = Cookie.get(SessionService.sessionName);
        var encryptValue = sessionStorage.getItem(SessionService.sessionName);
        if (encryptValue === null)
            return null;
        var pulsarSession = JSON.parse(CryptoJS.AES.decrypt(encryptValue, config.key).toString(CryptoJS.enc.Utf8));
        if (typeof pulsarSession[name] === 'undefined') {
            return null;
        }
        else {
            return pulsarSession[name];
        }
    };
    SessionService.delete = function (name) {
        //let encryptValue    = Cookie.get(SessionService.sessionName);
        var encryptValue = sessionStorage.getItem(SessionService.sessionName);
        if (encryptValue === null)
            return false;
        var pulsarSession = JSON.parse(CryptoJS.AES.decrypt(encryptValue, config.key).toString(CryptoJS.enc.Utf8));
        if (typeof pulsarSession[name] === 'undefined') {
            return false;
        }
        else {
            delete pulsarSession[name];
            encryptValue = CryptoJS.AES.encrypt(JSON.stringify(pulsarSession), config.key);
            //Cookie.set(SessionService.sessionName, encryptValue, 1, '/');
            sessionStorage.setItem(SessionService.sessionName, encryptValue);
            return true;
        }
    };
    SessionService.destroy = function () {
        //Cookie.delete(SessionService.sessionName);
        sessionStorage.removeItem(SessionService.sessionName);
    };
    SessionService.has = function (name) {
        //let encryptValue = Cookie.get(SessionService.sessionName);
        var encryptValue = sessionStorage.getItem(SessionService.sessionName);
        if (encryptValue === null)
            return false;
        var pulsarSession = JSON.parse(CryptoJS.AES.decrypt(encryptValue, config.key).toString(CryptoJS.enc.Utf8));
        return typeof pulsarSession[name] === 'undefined';
    };
    SessionService.all = function () {
        //let encryptValue    = Cookie.get(SessionService.sessionName);
        var encryptValue = sessionStorage.getItem(SessionService.sessionName);
        if (encryptValue === null)
            return null;
        var pulsarSession = JSON.parse(CryptoJS.AES.decrypt(encryptValue, config.key).toString(CryptoJS.enc.Utf8));
        if (typeof pulsarSession === 'undefined') {
            return null;
        }
        else {
            return pulsarSession;
        }
    };
    SessionService.sessionName = 'pulsar_session';
    SessionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SessionService);
    return SessionService;
}());
exports.SessionService = SessionService;
//# sourceMappingURL=session.service.js.map