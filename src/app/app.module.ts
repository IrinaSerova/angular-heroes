import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReversePhoneService } from './reverse-phone.service';
import { routes } from './app.router';

import { NavComponent } from './nav/nav.component';
import { PersonComponent } from './person/person.component';
import { AddressComponent } from './address/address.component';
import { BusinessComponent } from './business/business.component';
import { PhoneComponent } from './phone/phone.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PersonComponent,
    BusinessComponent,
    PhoneComponent,
    AddressComponent,
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes
  ],
  providers: [ReversePhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
