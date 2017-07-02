System.register(["@angular/core", "@angular/platform-browser", "./app.component", "./app.routing", "@angular/forms", "./kosta-nz.component", "./youth-kosta-nz.component", "./shared/header.component", "./shared/menu-bar.component", "./shared/conference-intro.component", "./shared/speakers.component", "./shared/schedule.component", "./shared/location.component", "./shared/footer.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, app_component_1, app_routing_1, forms_1, kosta_nz_component_1, youth_kosta_nz_component_1, header_component_1, menu_bar_component_1, conference_intro_component_1, speakers_component_1, schedule_component_1, location_component_1, footer_component_1, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (kosta_nz_component_1_1) {
                kosta_nz_component_1 = kosta_nz_component_1_1;
            },
            function (youth_kosta_nz_component_1_1) {
                youth_kosta_nz_component_1 = youth_kosta_nz_component_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (menu_bar_component_1_1) {
                menu_bar_component_1 = menu_bar_component_1_1;
            },
            function (conference_intro_component_1_1) {
                conference_intro_component_1 = conference_intro_component_1_1;
            },
            function (speakers_component_1_1) {
                speakers_component_1 = speakers_component_1_1;
            },
            function (schedule_component_1_1) {
                schedule_component_1 = schedule_component_1_1;
            },
            function (location_component_1_1) {
                location_component_1 = location_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            }
        ],
        execute: function () {
            AppModule = (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [
                        platform_browser_1.BrowserModule,
                        forms_1.FormsModule,
                        app_routing_1.routing
                    ],
                    declarations: [
                        app_component_1.AppComponent,
                        kosta_nz_component_1.KostaComponent,
                        youth_kosta_nz_component_1.YouthKostaComponent,
                        header_component_1.HeaderComponent,
                        menu_bar_component_1.MenuBarComponent,
                        conference_intro_component_1.ConferenceIntroComponent,
                        speakers_component_1.SpeakersComponent,
                        schedule_component_1.ScheduleComponent,
                        location_component_1.LocationComponent,
                        footer_component_1.FooterComponent
                    ],
                    providers: [
                        app_routing_1.appRoutingProviders
                    ],
                    bootstrap: [app_component_1.AppComponent]
                })
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});

//# sourceMappingURL=app.module.js.map
