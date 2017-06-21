System.register(["@angular/router"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, appRoutes, appRoutingProviders, routing;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            appRoutes = [
                { path: '', redirectTo: 'tasks', pathMatch: 'full' },
            ];
            exports_1("appRoutingProviders", appRoutingProviders = []);
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true }));
        }
    };
});

//# sourceMappingURL=app.routing.js.map
