import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {AuthService} from "../../core/services/auth.service";
import {catchError, takeUntil, throwError} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {


  constructor(private  authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  resetRequest(resetForm: NgForm) {
    this.authService.requestPasswordResetLink(resetForm.controls['email'].value)
      .pipe(catchError(e => {
        alert('Failed to send the request, please try again later');
        return throwError(e)
      }))
      .subscribe(data => {
     alert('Check your email for further information');
        this.router.navigate(['/login']);
      }, error => {
        let errorMessage: string = error.error;
        if (errorMessage && errorMessage.length > 0) {
          alert(errorMessage);
        } else {
          alert('Failed to send the request, please try again later');
        }
      });
  }
}
