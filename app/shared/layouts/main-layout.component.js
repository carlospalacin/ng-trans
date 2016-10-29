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
var router_1 = require('@angular/router');
var translator_service_1 = require('../translator/translator.service');
var auth_service_1 = require('../auth/auth.service');
var config = require('../app-globals');
var MainLayoutComponent = (function () {
    function MainLayoutComponent(trans, authService, router) {
        this.trans = trans;
        this.authService = authService;
        this.router = router;
    }
    MainLayoutComponent.prototype.ngOnInit = function () { };
    MainLayoutComponent.prototype.logout = function () {
        this.authService.logout();
        // Redirect to the root
        this.router.navigate([config.appUrlPrefix]);
    };
    MainLayoutComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'main-layout.component.html'
        }), 
        __metadata('design:paramtypes', [translator_service_1.TranslatorService, auth_service_1.AuthService, router_1.Router])
    ], MainLayoutComponent);
    return MainLayoutComponent;
}());
exports.MainLayoutComponent = MainLayoutComponent;
//# sourceMappingURL=main-layout.component.js.map