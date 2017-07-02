import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";

import {appRoutingProviders, routing} from "./app.routing";
import {FormsModule} from "@angular/forms";
import {KostaComponent} from "./kosta-nz.component";
import {YouthKostaComponent} from "./youth-kosta-nz.component";
import {HeaderComponent} from "./shared/header.component";
import {MenuBarComponent} from "./shared/menu-bar.component";
import {ConferenceIntroComponent} from "./shared/conference-intro.component";
import {SpeakersComponent} from "./shared/speakers.component";
import {ScheduleComponent} from "./shared/schedule.component";
import {LocationComponent} from "./shared/location.component";
import {FooterComponent} from "./shared/footer.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    KostaComponent,
    YouthKostaComponent,
    HeaderComponent,
    MenuBarComponent,
    ConferenceIntroComponent,
    SpeakersComponent,
    ScheduleComponent,
    LocationComponent,
    FooterComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
