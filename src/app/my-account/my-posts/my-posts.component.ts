import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserSessionService } from 'src/app/user-session.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.scss', '../../app.component.scss'],
})
export class MyPostsComponent implements OnInit {
  detalisDiv = false;
  differenceDate;
  days;
  months;
  jobsPosts;
  jobsPostsCopy;
  constructor(
    public http: HttpClient,
    private userSession: UserSessionService,
    private router: Router
  ) {
    if (!this.userSession.isLoggedIn) {
      this.router.navigate(['/']);
    } else {
      this.http
        .get(environment.API + '/job-post/user/' + this.userSession.user.id)
        .subscribe((res) => {
          this.jobsPosts = res;
        });
    }
  }

  ngOnInit(): void {}
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
  viewDetails(post) {
    this.router.navigate(['../post-details'], { queryParams: { id: post.id } });
  }
}
