import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../core/services/auth.service";
import {Router} from "@angular/router";
// import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    name: null,
    email: null,
    password: null,
    confirm_password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private  authService: AuthService, private router: Router) { }

  ngOnInit(): void { }

  onSubmit(): void {
    const { name, email, password, confirm_password } = this.form;

    this.authService.register(name, email, password, confirm_password).subscribe({
      next: (data) => {
        alert(data.message);
        this.router.navigate(['login']);
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}
