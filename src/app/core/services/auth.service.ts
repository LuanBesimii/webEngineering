import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable, of} from "rxjs";
import {LoginResponse} from "../../shared/interfaces/login-response.interface";
import {Router} from "@angular/router";
import {RealEstateResponse} from "../../shared/interfaces/real-estate-response.interface";
import {PasswordReset} from "../../shared/models/password-reset.model";



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}
  //
  // login(username: string, password: string): Observable<LoginResponse> {
  //   let httpParams = new HttpParams()
  //     .set('email', username)
  //     .set('password', password);
  //   return this.http.post<LoginResponse>(
  //     environment.apiUrl + 'api/auth/login',
  //     null,
  //     {params: httpParams}
  //   );
  // }
  //
  login(username: string, password: string): Observable<LoginResponse> {
    const dummyLoginResponse: LoginResponse = {
      auth_token: 'dummyAuyhToken',
      access_token: 'dummyAccessToken',
      token_type: "Bearer"
    };
    return of(dummyLoginResponse);
  }
  register(name: string, email: string, password: string, confirm_password: string): Observable<RealEstateResponse> {

    let httpParams = new HttpParams()
      .set('name', name)
      .set('email', email)
      .set('password', password)
      .set('password_confirmation', confirm_password);
    return this.http.post<RealEstateResponse>(
      environment.apiUrl + 'api/auth/register',
      null,
      {params: httpParams}
    );
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['webpage']);
  }

  requestPasswordResetLink(email: string) {
    // let httpParams = new HttpParams()
    //   .set('email', email)
    return this.http.post(environment.apiUrl + `api/auth/password/email?email=${email}`, {});
    this.router.navigate(['login']);
  }
  //
  resetPassword(input: PasswordReset) {
    return this.http.put(environment.apiUrl + 'api/auth/password/reset/email?email', input);
  }


}
