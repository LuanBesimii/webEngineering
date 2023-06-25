import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminSideNavComponent } from './admin-side-nav/admin-side-nav.component';
import {SharedModule} from "../../shared/shared.module";
import { ArticlesComponent } from './articles/articles.component';
import { ContactComponent } from './contact/contact.component';
import { AboutContentComponent } from './about-content/about-content.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import { AdminContentComponent } from './admin-content/admin-content.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import { ArticleEditComponent } from './articles/article-edit/article-edit.component';
import { ArticleCreateComponent } from './articles/article-create/article-create.component';
import { ArticlePropertyComponent } from './articles/article-property/article-property.component';
import {MatSortModule} from "@angular/material/sort";
import {MatTooltipModule} from "@angular/material/tooltip";
import {ReactiveFormsModule} from "@angular/forms";
import { ContactViewComponent } from './contact/contact-view/contact-view.component';
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    AdminComponent,
    AdminSideNavComponent,
    ArticlesComponent,
    ContactComponent,
    AboutContentComponent,
    AdminContentComponent,
    ArticleEditComponent,
    ArticleCreateComponent,
    ArticlePropertyComponent,
    ContactViewComponent,
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        SharedModule,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatListModule,
        MatFormFieldModule,
        MatTableModule,
        MatPaginatorModule,
        MatInputModule,
        MatSortModule,
        MatTooltipModule,
        ReactiveFormsModule,
        MatSelectModule
    ]
})
export class AdminModule { }
