System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Schedules;
    return {
        setters: [],
        execute: function () {
            Schedules = (function () {
                function Schedules(date, schedules) {
                    this.date = date;
                    this.schedules = schedules;
                }
                return Schedules;
            }());
            exports_1("Schedules", Schedules);
        }
    };
});

//# sourceMappingURL=schedules.js.map
