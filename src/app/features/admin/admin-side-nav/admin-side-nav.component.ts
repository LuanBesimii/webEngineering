import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SidenavItem} from "../../../shared/models/sidenav-item.model";

@Component({
  selector: 'app-admin-side-nav',
  templateUrl: './admin-side-nav.component.html',
  styleUrls: ['./admin-side-nav.component.css']
})
export class AdminSideNavComponent implements OnInit {
  @Output()  closeSideNavigation = new EventEmitter();
  @Input() items: SidenavItem[] =[];
  constructor() { }
adminName:string = '';
adminEmail:string = '';

  ngOnInit(): void {
    // this.adminName = localStorage.getItem()
  }

}
