import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {map, Observable} from "rxjs";
import {LoginResponse} from "../../shared/interfaces/login-response.interface";
import {RealEstateResponse} from "../../shared/interfaces/real-estate-response.interface";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient, private router: Router) {
  }

  getContacts() {
    return this.http.get(environment.apiUrl + `api/contact-us`)
  }

  getSincleContact(id: string | null) {
    return this.http.get<any>(environment.apiUrl + `api/contact/${id}`)
  }

  deleteContact(id: string | null) {
    return this.http.delete<any>(environment.apiUrl + `api/contact/delete/${id}`)
  }


  updateAboutUs(title: string, body: string): Observable<RealEstateResponse> {
    let httpParams = new HttpParams()
      .set('title', title)
      .set('body', body)
    return this.http.put<RealEstateResponse>(environment.apiUrl + "api/update/about-us", null, {params: httpParams})
  }

}
