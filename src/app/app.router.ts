
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { TellerComponent } from './phone/phone.component';
import { AddressComponent } from './address/address.component';

export const router: Routes = [
  { path: '', redirectTo: 'phone', pathMatch: 'full' },
  { path: 'app', component: AppComponent },
  { path: 'person', component: PersonComponent },
  { path: 'phone', component: PhoneComponent },
  { path: 'address', component: AddressComponent },
  { path: 'business', component: BusinessComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);