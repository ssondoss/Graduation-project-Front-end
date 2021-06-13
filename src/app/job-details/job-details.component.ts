import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserSessionService } from '../user-session.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss', '../app.component.scss'],
})
export class JobDetailsComponent implements OnInit {
  id;
  jobDetails;
  userApplications = [];
  constructor(
    private activatedRouter: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private userSession: UserSessionService
  ) {
    this.activatedRouter.queryParams.subscribe((params) => {
      this.id = params['id'];
      this.http
        .get(environment.API + '/job-post/' + this.id)
        .subscribe((res) => {
          this.jobDetails = res;
        });
    });
  }

  ngOnInit(): void {
    this.getUserApplications();
  }
  getUserApplications() {
    this.http
      .get(
        environment.API +
          '/applications/get-all-applications-by-user/' +
          this.userSession.user.id
      )
      .subscribe((res: any) => {
        this.userApplications = res;
      });
  }
  applyNow(postId) {
    if (this.userSession.isLoggedIn) {
      this.http
        .get(
          environment.API + '/cv-info/cv-by-user-id/' + this.userSession.user.id
        )
        .subscribe(
          (res) => {
            this.http
              .post(environment.API + '/applications', {
                jobPostId: postId,
                userId: this.userSession.user.id,
              })
              .subscribe((res) => {
                this.getUserApplications();
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'You applied for this job successfully',
                  showConfirmButton: false,
                  timer: 2500,
                });
              });
          },
          (error) => {
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'You must create CV to apply',
              showConfirmButton: false,
              timer: 2500,
            });
          }
        );
    } else this.router.navigate(['/login']);
  }

  isApplied(postId) {
    for (const application of this.userApplications) {
      if (application.jobPost.id === postId) return true;
    }
    return false;
  }
}
