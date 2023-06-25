import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebpageRoutingModule } from './webpage-routing.module';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WebpageRoutingModule,
    SharedModule
  ]
})
export class WebpageModule { }
