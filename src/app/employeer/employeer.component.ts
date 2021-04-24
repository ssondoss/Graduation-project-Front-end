import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employeer',
  templateUrl: './employeer.component.html',
  styleUrls: ['./employeer.component.scss', '../app.component.scss'],
})
export class EmployeerComponent implements OnInit {
  externalLinkForm = false;
  educationForm = false;
  skillForm = false;

  constructor() {}

  ngOnInit(): void {}
  showExternalLinkForm() {
    this.externalLinkForm = true;
  }
  showEducationForm() {
    this.educationForm = true;
  }
  showSkillForm() {
    this.skillForm = true;
  }
}
