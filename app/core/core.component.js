"use strict";
var CoreComponent = (function () {
    function CoreComponent() {
    }
    CoreComponent.prototype.applyMixins = function (derivedCtor, baseCtors) {
        /*baseCtors.forEach(baseCtor => {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            });
        });*/
    };
    return CoreComponent;
}());
exports.CoreComponent = CoreComponent;
//# sourceMappingURL=core.component.js.map