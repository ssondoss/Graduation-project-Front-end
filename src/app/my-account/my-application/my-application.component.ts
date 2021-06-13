import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserSessionService } from 'src/app/user-session.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-application',
  templateUrl: './my-application.component.html',
  styleUrls: ['./my-application.component.scss', '../../app.component.scss'],
})
export class MyApplicationComponent implements OnInit {
  detalisDiv = false;
  differenceDate;
  days;
  details = false;
  months;
  selectedJobPost = null;
  myApplications;
  constructor(
    public http: HttpClient,
    private router: Router,
    private userSession: UserSessionService
  ) {
    if (!this.userSession.isLoggedIn) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.http
      .get(
        environment.API +
          '/applications/get-all-applications-by-user/' +
          this.userSession.user.id
      )
      .subscribe(
        (res: any) => {
          this.myApplications = res;
          console.log(this.myApplications);
        },
        (error) => {}
      );
  }
  showDetails() {
    this.detalisDiv = !this.detalisDiv;
  }
  formatDate(date) {
    this.differenceDate = Date.now() - date;
    // let seconds = this.differenceDate / 1000;
    // let mintues = seconds / 60;
    // let hours = mintues / 60;
    // let days = hours / 24;
    // let weeks = days / 7
    let months = parseInt(this.differenceDate / 2592000000 + '');
    let weeks = parseInt((this.differenceDate % 2592000000) / 604800000 + '');
    let days = parseInt(
      ((this.differenceDate % 2592000000) % 604800000) / 86400000 + ''
    );

    let hours = parseInt(
      ((this.differenceDate % 2592000000) % 86400000) / 3600000 + ''
    );
    let minutes = parseInt(
      (((this.differenceDate % 2592000000) % 86400000) % 3600000) / 60000 + ''
    );
    let seconds = parseInt(
      ((((this.differenceDate % 2592000000) % 86400000) % 3600000) % 60000) /
        1000 +
        ''
    );

    if (months > 0) {
      return months + 'month';
    } else if (weeks > 0) {
      return weeks + 'week';
    } else if (days > 0) {
      return days + 'day';
    } else if (hours > 0) {
      return hours + 'hour';
    } else if (minutes > 0) {
      return minutes + 'minute';
    } else if (seconds > 0) {
      return seconds + 'second';
    }
  }

  viewDetails(jobPost) {
    this.details = true;
    this.selectedJobPost = jobPost;
    this.router.navigate(['../job-details'], {
      queryParams: { id: jobPost.id },
    });
  }
}
