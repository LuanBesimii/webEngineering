import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from "./admin.component";
import {WebpageComponent} from "../webpage/webpage.component";
import {ArticlesComponent} from "./articles/articles.component";
import {ContactComponent} from "./contact/contact.component";
import {AboutContentComponent} from "./about-content/about-content.component";
import {NotFoundComponent} from "../../not-found/not-found.component";
import {AdminContentComponent} from "./admin-content/admin-content.component";
import {ArticleCreateComponent} from "./articles/article-create/article-create.component";
import {ArticleEditComponent} from "./articles/article-edit/article-edit.component";
import {ArticlePropertyComponent} from "./articles/article-property/article-property.component";
import {ContactViewComponent} from "./contact/contact-view/contact-view.component";

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      {path: 'main', component: AdminContentComponent},
      {
        path: 'articles', children: [
          {
            path: "list", component: ArticlesComponent
          },
          {
            path: "create", component: ArticleCreateComponent
          },

          {
            path: "edit/:id", component: ArticleEditComponent
          },

          {
            path: "property/:id", component: ArticlePropertyComponent
          }
        ]
      },
      {path: 'contact', children:[
          {path: '' , component:ContactComponent},
          {path: ":id" , component: ContactViewComponent}
        ]},
      {path: 'about-content', component: AboutContentComponent},
    ]

  },
  {path: 'webpage', component: WebpageComponent},
  {
    path: '**', component: NotFoundComponent
  },
  {
    path: 'not-found', component: NotFoundComponent
  }
  ,];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
