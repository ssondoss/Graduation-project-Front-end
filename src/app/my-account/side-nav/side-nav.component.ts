import { Component, OnInit } from '@angular/core';
import { UserSessionService } from 'src/app/user-session.service';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss', '../../app.component.scss'],
})
export class SideNavComponent implements OnInit {
  constructor(public userSession: UserSessionService) {}

  ngOnInit(): void {}
}
