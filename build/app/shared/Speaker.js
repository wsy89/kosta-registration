System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Introduction;
    return {
        setters: [],
        execute: function () {
            Introduction = (function () {
                function Introduction(image, name, title, details) {
                    this.image = image;
                    this.name = name;
                    this.title = title;
                    this.details = details;
                }
                return Introduction;
            }());
            exports_1("Introduction", Introduction);
        }
    };
});

//# sourceMappingURL=Speaker.js.map
