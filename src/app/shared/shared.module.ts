import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {AgentsComponent} from "./components/agents/agents.component";
import {CarouselComponent} from "./components/carousel/carousel.component";
import {FieldsetComponent} from "./components/fieldset/fieldset.component";
import {WebpageComponent} from "../features/webpage/webpage.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLinkWithHref} from "@angular/router";
import { LoginHeaderComponent } from './login-header/login-header.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {FlexLayoutModule} from "@angular/flex-layout";
import {SwiperModule} from "swiper/angular";
import {MatSliderModule} from "@angular/material/slider";
import {NgxSliderModule} from "@angular-slider/ngx-slider";
import { DealsCarouselComponent } from './components/deals-carousel/deals-carousel.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AgentsComponent,
    CarouselComponent,
    FieldsetComponent,
    WebpageComponent,
    LoginHeaderComponent,
    DealsCarouselComponent,

  ],
    imports: [
        CommonModule,
        FormsModule,
        RouterLinkWithHref,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule,
        SwiperModule,
        MatSliderModule,
        NgxSliderModule,
        FontAwesomeModule,
        ReactiveFormsModule
    ],
  exports: [
    FormsModule,
    LoginHeaderComponent
  ]
})
export class SharedModule { }
