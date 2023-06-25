import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {SharedModule} from "./shared/shared.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpRequestInterceptor} from "./core/helpers/http.interceptor";
import {ForgotPasswordComponent} from './auth/forgot-password/forgot-password.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NotFoundComponent} from './not-found/not-found.component';
import {SwiperModule} from "swiper/angular";
import {FontAwesomeModule, FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {fas,} from "@fortawesome/free-solid-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SwiperModule,
    FontAwesomeModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // @ts-ignore
    library.addIconPacks(fas,fab)
  }

}
