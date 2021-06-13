import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixed-container-static',
  templateUrl: './fixed-container-static.component.html',
  styleUrls: ['./fixed-container-static.component.scss'],
})
export class FixedContainerStaticComponent implements OnInit {
  about = true;
  contact = false;
  cvData;
  id;
  experience = false;
  education = false;
  skills = false;
  constructor(private http: HttpClient) {}
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
  ngOnInit(): void {}
}
