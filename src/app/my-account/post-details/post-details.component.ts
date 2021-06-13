import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserSessionService } from 'src/app/user-session.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss', '../../app.component.scss'],
})
export class PostDetailsComponent implements OnInit {
  id;

  postDetails;
  applicationForPost = [];
  constructor(
    private activatedRouter: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private userSession: UserSessionService
  ) {
    if (this.userSession.isLoggedIn) {
      this.activatedRouter.queryParams.subscribe((params) => {
        this.id = params['id'];
        this.http
          .get(environment.API + '/job-post/' + this.id)
          .subscribe((res) => {
            this.postDetails = res;
          });
        this.http
          .get(
            environment.API +
              '/applications/get-all-applications-by-job-post/' +
              this.id
          )
          .subscribe((res: any) => {
            this.applicationForPost = res;
            console.log(this.applicationForPost);
          });
      });
    } else this.router.navigate(['/']);
  }

  ngOnInit(): void {}

  viewApplication(application) {
    if (application.viewedByPublisher == false) {
      this.http
        .put(environment.API + '/applications/' + application.id, {})
        .subscribe((res) => {});
    }
    this.http
      .get(
        environment.API + '/cv-info/cv-by-user-id/' + application.user.id,
        {}
      )
      .subscribe((res: any) => {
        console.log(res);
        this.router.navigate(['../' + res.cvTemplate], {
          queryParams: { id: res.user.id },
        });
      });
  }
  changeJobPostStatus() {
    this.http
      .put(
        environment.API +
          '/job-post/' +
          this.id +
          '?status=' +
          !this.postDetails.status,
        {}
      )
      .subscribe((res) => {
        //this.postDetails.status = !this.postDetails.status;
        this.postDetails = res;
      });
  }
}
