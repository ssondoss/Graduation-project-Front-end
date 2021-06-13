import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserSessionService } from '../user-session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', '../app.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    public userSession: UserSessionService,
    private http: HttpClient
  ) {}
  newJobNotifications = [];
  ngOnInit(): void {
    if (this.userSession.isLoggedIn)
      this.http
        .get(
          environment.API +
            '/job-notification/user-not-viewed-notifications/' +
            this.userSession.user.id
        )
        .subscribe((res: any) => {
          this.newJobNotifications = res;
          console.log(res);
        });
  }
}
