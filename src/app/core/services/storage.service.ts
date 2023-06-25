import { Injectable } from '@angular/core';
import {LoginResponse} from "../../shared/interfaces/login-response.interface";
const TOKEN_KEY = 'auth_token';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  clean(): void {
    localStorage.clear();
  }

  public saveUser(response: LoginResponse): void {
    localStorage.setItem(TOKEN_KEY, response.access_token);
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem(TOKEN_KEY) != null;
  }
}
