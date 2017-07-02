System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ScheduleItem;
    return {
        setters: [],
        execute: function () {
            ScheduleItem = (function () {
                function ScheduleItem(start, end, title, speaker, details, icon) {
                    this.start = start;
                    this.end = end;
                    this.title = title;
                    this.speaker = speaker;
                    this.details = details;
                    this.icon = icon;
                }
                return ScheduleItem;
            }());
            exports_1("ScheduleItem", ScheduleItem);
        }
    };
});

//# sourceMappingURL=scheduleItem.js.map
