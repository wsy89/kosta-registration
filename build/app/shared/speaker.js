System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Speaker;
    return {
        setters: [],
        execute: function () {
            Speaker = (function () {
                function Speaker(image, name, title, about) {
                    this.image = image;
                    this.name = name;
                    this.title = title;
                    this.about = about;
                }
                return Speaker;
            }());
            exports_1("Speaker", Speaker);
        }
    };
});

//# sourceMappingURL=speaker.js.map
