import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-fixed-container2',
  templateUrl: './fixed-container2.component.html',
  styleUrls: ['./fixed-container2.component.scss'],
})
export class FixedContainer2Component implements OnInit {
  about = true;
  contact = false;
  cvData;
  id;
  experience = false;
  education = false;
  skills = false;
  constructor(private activeRouter: ActivatedRoute, private http: HttpClient) {
    this.activeRouter.queryParams.subscribe((params) => {
      this.id = params['id'];
    });
  }
  showAbout() {
    this.about = true;
    this.contact = false;
    this.experience = false;
    this.education = false;
    this.skills = false;
  }
  showContact() {
    this.contact = true;
    this.about = false;
    this.experience = false;
    this.education = false;
    this.skills = false;
  }
  showEducation() {
    this.contact = false;
    this.about = false;
    this.experience = false;
    this.education = true;
    this.skills = false;
  }
  showSkills() {
    this.contact = false;
    this.about = false;
    this.experience = false;
    this.education = false;
    this.skills = true;
  }
  showExperience() {
    this.contact = false;
    this.about = false;
    this.experience = true;
    this.education = false;
    this.skills = false;
  }
  ngOnInit(): void {
    this.http
      .get(environment.API + '/cv-info/cv-by-user-id/' + this.id)
      .subscribe(
        (res) => {
          this.cvData = res;
        },
        (err) => {}
      );
  }
  public getVideoSrc(video) {
    return environment.VIDEOS_BASE_URL + video;
  }
}
