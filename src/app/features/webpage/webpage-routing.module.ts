import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WebpageComponent} from "./webpage.component";

const routes: Routes = [
  {path: '', component:WebpageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebpageRoutingModule { }
