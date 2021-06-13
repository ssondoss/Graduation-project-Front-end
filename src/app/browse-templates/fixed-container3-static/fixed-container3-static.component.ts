import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixed-container3-static',
  templateUrl: './fixed-container3-static.component.html',
  styleUrls: ['./fixed-container3-static.component.scss'],
})
export class FixedContainer3StaticComponent implements OnInit {
  about = true;
  contact = false;
  cvData;
  id;
  experience = false;
  education = false;
  skills = false;
  constructor() {}
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
