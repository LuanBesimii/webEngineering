import {SidenavItem} from '../models/sidenav-item.model';

export abstract class SideNavItemsArray {
  public static adminSideNavItems: SidenavItem[] = [
    {viewName: 'Dashboard', iconName: 'dashboard', routerLink: 'main'},
    {viewName: 'Webpage', iconName: ' remove_red_eye', routerLink: 'webpage'},
    {viewName: 'Articles', iconName: 'today', routerLink: 'articles/list'},
    {viewName: 'Concact', iconName: 'email', routerLink: 'contact'},
    {viewName: 'About Content', iconName: 'info', routerLink: 'about-content'}
  ];
}
