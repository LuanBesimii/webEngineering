import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {AdminGuard} from "./core/guards/admin.guard";
import {ForgotPasswordComponent} from "./auth/forgot-password/forgot-password.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {path: '', redirectTo: 'webpage', pathMatch: 'full'},
  {path: 'webpage', loadChildren: () => import('./features/webpage/webpage.module').then(w => w.WebpageModule)},
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('./features/admin/admin.module').then(w => w.AdminModule)
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {
    path: '**', component: NotFoundComponent
  },
  {
    path: 'not-found', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
