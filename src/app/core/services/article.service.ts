import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {RealEstateResponse} from "../../shared/interfaces/real-estate-response.interface";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private http: HttpClient, private router: Router) {
  }

  getArticles() {
    return this.http.get(environment.apiUrl + `api/articles`)
  }

  getSincleArticles(id:string | null) {
    return this.http.get<any>(environment.apiUrl + `api/article/property/${id}`)
  }

  deleteArticle(id:string | null) {
    return this.http.delete<any>(environment.apiUrl + `api/article/delete/${id}`)
  }

  updateArticles(id:string,body:any) {
    return this.http.put<any>(environment.apiUrl + `api/article/property/${id}` ,body)
  }

  createArticle(body:any):Observable<RealEstateResponse> {
    return this.http.post<RealEstateResponse>(environment.apiUrl + `api/create-article`, body)
  }
  SearchArticles(body:any){
    let httpParams = new HttpParams()
      .set('price_from', body.price_from)
      .set('price_to', body.price_to)
      .set('offer_types', body.offer_types)
      .set('city', body.city)
      .set('type', body.type)

    return this.http.get(environment.apiUrl + `api/search` ,{params:httpParams})
  }
   getAllSearchArticles(body:any){
    return this.http.get(environment.apiUrl + `api/search`,body)
  }

}
