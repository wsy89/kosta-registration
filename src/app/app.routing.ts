import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {KostaComponent} from './kosta-nz.component';
import {YouthKostaComponent} from './youth-kosta-nz.component';
import {ChooseKostaModalComponent} from 'app/modal/choose-kosta-modal.component';

const appRoutes: Routes = [
  {path: 'kosta', component: KostaComponent},
  {path: 'youth-kosta', component: YouthKostaComponent},
  {path: 'choose', component: ChooseKostaModalComponent},
  {path: '', redirectTo: '/choose', pathMatch: 'full'},
  {path: '**', redirectTo: '/choose', pathMatch: 'full'}//todo not found page
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
