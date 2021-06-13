import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserSessionService } from '../user-session.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-find-job',
  templateUrl: './find-job.component.html',
  styleUrls: ['./find-job.component.scss', '../app.component.scss'],
})
export class FindJobComponent implements OnInit {
  differenceDate;
  days;
  months;
  userApplications = [];
  jobsPosts;
  jobsPostsCopy;

  detalisDiv = [];
  constructor(
    public http: HttpClient,
    private userSession: UserSessionService
  ) {}

  ngOnInit(): void {
    this.http.get(environment.API + '/job-post').subscribe(
      (res: any) => {
        this.jobsPosts = res;
        console.log(this.jobsPosts);
        this.jobsPostsCopy = this.jobsPosts;
      },
      (error) => {}
    );

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

  showDetails(id) {
    this.detalisDiv.includes(id)
      ? (this.detalisDiv = this.detalisDiv.filter((div) => div != id))
      : this.detalisDiv.push(id);
  }

  isShowen(id) {
    return this.detalisDiv.includes(id);
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
      return months + ' month';
    } else if (weeks > 0) {
      return weeks + ' week';
    } else if (days > 0) {
      return days + ' day';
    } else if (hours > 0) {
      return hours + ' hour';
    } else if (minutes > 0) {
      return minutes + ' minute';
    } else if (seconds > 0) {
      return seconds + ' second';
    }
  }

  // fillters variables
  typeOfSelection = 'all';
  city = 'all';
  employmentType = 'all';
  expereinceLevel = 'all';
  searchKey = '';

  filterOnDate(jobPostFilltered) {
    if (this.typeOfSelection == 'all') return jobPostFilltered;

    return jobPostFilltered.filter((job) => {
      let date = this.formatDate(job.dateAndTime);

      if (this.typeOfSelection == 'lastMonth' && !date.includes('month')) {
        return true;
      } else if (
        this.typeOfSelection == 'lastWeek' &&
        !date.includes('month') &&
        !date.includes('week')
      ) {
        return true;
      } else if (
        this.typeOfSelection == 'last24' &&
        !date.includes('month') &&
        !date.includes('week') &&
        !date.includes('day')
      ) {
        return true;
      } else if (this.typeOfSelection == 'anytime') {
        return true;
      }
    }, this);
  }
  filterCity(jobPostFilltered) {
    if (this.city == 'all') return jobPostFilltered;

    return jobPostFilltered.filter((job) => job.jobLocation == this.city);
  }
  filterEmploymentType(jobPostFilltered) {
    if (this.employmentType == 'all') return jobPostFilltered;

    return this.jobsPosts.filter(
      (job) => job.employementType == this.employmentType
    );
  }
  filterExpereinceLevel(jobPostFilltered) {
    if (this.expereinceLevel == 'all') return jobPostFilltered;
    return this.jobsPosts.filter(
      (job) => job.experienceLevel == this.expereinceLevel
    );
  }

  filterTitle(jobPostFilltered) {
    if (this.searchKey == '') return jobPostFilltered;
    return this.jobsPosts.filter(
      (job) =>
        job.companyName.includes(this.searchKey) ||
        job.jobRole.includes(this.searchKey)
    );
  }

  filter() {
    this.jobsPosts = this.jobsPostsCopy;
    this.jobsPosts = this.filterOnDate(this.jobsPosts);
    this.jobsPosts = this.filterCity(this.jobsPosts);
    this.jobsPosts = this.filterEmploymentType(this.jobsPosts);
    this.jobsPosts = this.filterExpereinceLevel(this.jobsPosts);
    this.jobsPosts = this.filterTitle(this.jobsPosts);
  }

  applyNow(postId) {
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
  }

  isApplied(postId) {
    for (const application of this.userApplications) {
      if (application.jobPost.id === postId) return true;
    }
    return false;
  }
}
