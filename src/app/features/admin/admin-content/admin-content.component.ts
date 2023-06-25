import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.css']
})
export class AdminContentComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
  logout() {
    this.authService.logout();
  }
}
