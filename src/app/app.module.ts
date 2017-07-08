import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {appRoutingProviders, routing} from './app.routing';
import {FormsModule} from '@angular/forms';
import {KostaComponent} from './kosta-nz.component';
import {YouthKostaComponent} from './youth-kosta-nz.component';
import {HeaderComponent} from './common/header.component';
import {MenuBarComponent} from './shared/menu-bar.component';
import {ConferenceIntroComponent} from './shared/conference-intro.component';
import {SpeakersComponent} from './shared/speakers.component';
import {ScheduleComponent} from './shared/schedule.component';
import {LocationComponent} from './shared/location.component';
import {FooterComponent} from './common/footer.component';
import {RegistrationComponent} from './shared/registeration.component';
import {WindowRefService} from './service/window-ref.service';
import {TabsComponent} from './shared/tabs.component';
import {TabComponent} from './shared/tab.component';
import {GalleryComponent} from './shared/gallery.component';
import {ConferenceInfoComponent} from './shared/conference-info.component';
import {ChooseKostaModalComponent} from './modal/choose-kosta-modal.component';
import {GalleryModalComponent} from './modal/gallery-modal.component';
import {GalleryThumbnailComponent} from './shared/gallery-thumbnail.component';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {RegisterModalComponent} from './modal/register-modal.component';
import {SnsListComponent} from './common/sns-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    Ng2PageScrollModule.forRoot()
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
    FooterComponent,
    RegistrationComponent,
    TabsComponent,
    TabComponent,
    GalleryComponent,
    GalleryThumbnailComponent,
    GalleryModalComponent,
    ConferenceInfoComponent,
    ChooseKostaModalComponent,
    RegisterModalComponent,
    SnsListComponent
  ],
  providers: [
    appRoutingProviders,
    WindowRefService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
