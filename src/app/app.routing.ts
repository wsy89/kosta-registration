import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {KostaComponent} from "./kosta-nz.component";
import {YouthKostaComponent} from "./youth-kosta-nz.component";

const appRoutes: Routes = [
  {path: '', redirectTo: 'kosta', pathMatch: 'full'},
  {path: 'kosta', component: KostaComponent},
  {path: 'youth-kosta', component: YouthKostaComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
