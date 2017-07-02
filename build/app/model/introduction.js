System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Introduction;
    return {
        setters: [],
        execute: function () {
            Introduction = (function () {
                function Introduction(title, text, image) {
                    this.title = title;
                    this.text = text;
                    this.image = image;
                }
                return Introduction;
            }());
            exports_1("Introduction", Introduction);
        }
    };
});

//# sourceMappingURL=introduction.js.map
