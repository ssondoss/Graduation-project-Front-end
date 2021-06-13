import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserSessionService } from 'src/app/user-session.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-cv',
  templateUrl: './my-cv.component.html',
  styleUrls: ['./my-cv.component.scss', '../../app.component.scss'],
})
export class MyCvComponent implements OnInit {
  cvTemplate;
  cvData = null;
  cvLink;
  isCopied = false;
  constructor(
    private http: HttpClient,
    private userSession: UserSessionService,
    private router: Router
  ) {
    if (!this.userSession.isLoggedIn) {
      this.router.navigate(['/']);
    } else {
      this.http
        .get(
          environment.API + '/cv-info/cv-by-user-id/' + this.userSession.user.id
        )
        .subscribe((res: any) => {
          this.cvData = res;
          this.cvTemplate = res.cvTemplate;
          this.cvLink =
            'http://localhost:4200/' +
            this.cvTemplate +
            '?id=' +
            this.userSession.user.id;
        });
    }
  }

  ngOnInit(): void {}
  copyUrl(input) {
    input.select();
    document.execCommand('copy');

    this.isCopied = true;
  }
}
