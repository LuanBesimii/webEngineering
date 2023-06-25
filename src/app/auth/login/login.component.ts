import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../core/services/auth.service";
import {StorageService} from "../../core/services/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private storageService: StorageService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.router.navigate(['admin/main']);
    }
  }



  onSubmit(): void {
    const { username, password } = this.form;
    this.authService.login(username, password).subscribe({
      next: (data) => {
        this.storageService.saveUser(data);
        this.isLoginFailed = false;
        let name = username.substr(0, username.indexOf('@'));
        localStorage.setItem('email', username)
        localStorage.setItem('name', name)
        this.goToAdminPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

  private goToAdminPage() {
    this.router.navigate(['admin/main'])
  }

}
