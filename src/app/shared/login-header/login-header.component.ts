import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.css']
})
export class LoginHeaderComponent implements OnInit {
  @Output() SideNavigationToggle = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onToggleOpenSidenav() {
    this.SideNavigationToggle.emit();
  }


}
