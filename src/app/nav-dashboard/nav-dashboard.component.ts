import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'nav-dashboard',
  templateUrl: './nav-dashboard.component.html',
  styleUrls: ['./nav-dashboard.component.scss', '../app.component.scss'],
})
export class NavDashboardComponent implements OnInit {
  constructor(public appService: AppService) {}

  ngOnInit(): void {}
}
