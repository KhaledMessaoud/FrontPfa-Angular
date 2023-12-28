import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

import { FormsModule } from '@angular/forms';

import {​​​​​​​​ HttpClientModule }​​​​​​​​ from'@angular/common/http';
    




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AcceuilComponent
  ],
  imports: [
    FormsModule,
 
 BrowserModule,
 AppRoutingModule,
 FormsModule,
 HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
