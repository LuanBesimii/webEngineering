import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../core/services/auth.service";
import {SidenavItem} from "../../shared/models/sidenav-item.model";
import {SideNavItemsArray} from "../../shared/string-resourses/sidenav-items-arraw.statis";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminSideNavItems: SidenavItem[] = SideNavItemsArray.adminSideNavItems;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
