System.register(["@angular/router", "./kosta-nz.component", "./youth-kosta-nz.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, kosta_nz_component_1, youth_kosta_nz_component_1, appRoutes, appRoutingProviders, routing;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (kosta_nz_component_1_1) {
                kosta_nz_component_1 = kosta_nz_component_1_1;
            },
            function (youth_kosta_nz_component_1_1) {
                youth_kosta_nz_component_1 = youth_kosta_nz_component_1_1;
            }
        ],
        execute: function () {
            appRoutes = [
                { path: '', redirectTo: 'kosta', pathMatch: 'full' },
                { path: 'kosta', component: kosta_nz_component_1.KostaComponent },
                { path: 'youth-kosta', component: youth_kosta_nz_component_1.YouthKostaComponent }
            ];
            exports_1("appRoutingProviders", appRoutingProviders = []);
            exports_1("routing", routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true }));
        }
    };
});

//# sourceMappingURL=app.routing.js.map
