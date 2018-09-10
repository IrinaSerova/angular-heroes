import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReversePhoneService } from './reverse-phone.service';

import { NavComponent } from './nav/nav.component';
import { PersonComponent } from './person/person.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ReversePhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
