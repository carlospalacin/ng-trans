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
var translator_service_1 = require('./shared/translator/translator.service');
var AppComponent = (function () {
    function AppComponent(trans) {
        this.trans = trans;
        this.var01 = "Valor por defecto";
    }
    AppComponent.prototype.testRender = function () {
        console.log('traza 01');
        return 'esto es una prueba que ejecuta un console log';
    };
    AppComponent.prototype.cambio = function () {
        this.var01 = "valor cambiado";
    };
    AppComponent.prototype.cambioVacio = function () {
        // no hago nada de nada
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pulsar-app',
            templateUrl: 'app.component.html'
        }), 
        __metadata('design:paramtypes', [translator_service_1.TranslatorService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map