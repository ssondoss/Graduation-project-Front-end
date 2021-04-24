import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss', '../app.component.scss'],
})
export class VideosComponent implements OnInit {
  sidebar = false;
  constructor() {}

  ngOnInit(): void {}
  showSidebar() {
    this.sidebar = !this.sidebar;
  }
}
