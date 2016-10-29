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
var MiddlewareService = (function () {
    function MiddlewareService(router, route) {
        this.router = router;
        this.route = route;
        this.handle();
    }
    MiddlewareService.prototype.handle = function () {
        // this.router.events.subscribe((val) => {
        //
        //     console.log(val instanceof NavigationEnd);
        //
        //     if(val instanceof NavigationEnd)
        //     {
        //         console.log(this.route.snapshot.url);
        //         console.log(this.route.snapshot.data);
        //     }
        // });
        //console.log(this.route.snapshot.url);
        console.log(this.route.snapshot.data);
        return false;
    };
    MiddlewareService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute])
    ], MiddlewareService);
    return MiddlewareService;
}());
exports.MiddlewareService = MiddlewareService;
//# sourceMappingURL=middleware.service.js.map