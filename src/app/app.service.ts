import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  public sidebar = false;
  public showSidebar() {
    this.sidebar = !this.sidebar;
  }
  constructor() {}
}
