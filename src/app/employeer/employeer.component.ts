import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { UserSessionService } from '../user-session.service';
import * as uuid from 'uuid';
import { element } from 'protractor';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-employeer',
  templateUrl: './employeer.component.html',
  styleUrls: ['./employeer.component.scss', '../app.component.scss'],
})
export class EmployeerComponent implements OnInit {
  postJobForm: FormGroup;
  skillsPostJob;
  qualifications;
  skillsDiv = false;
  qualificationsDiv = false;
  jobDetails = false;
  constructor(
    public appService: AppService,
    public userSession: UserSessionService,
    public formBuilder: FormBuilder,
    public http: HttpClient,
    public router: Router
  ) {
    if (!userSession.isLoggedIn) {
      router.navigate(['/login']);
    }
  }
  showSkills() {
    this.skillsDiv = !this.skillsDiv;
    this.jobDetails = false;
    this.qualificationsDiv = false;
  }
  showQualifications() {
    this.qualificationsDiv = !this.qualificationsDiv;
    this.skillsDiv = false;
    this.jobDetails = false;
  }
  showJobDetails() {
    this.jobDetails = !this.jobDetails;
    this.skillsDiv = false;
    this.qualificationsDiv = false;
  }

  ngOnInit(): void {
    this.clearInputs();
  }
  addSkill() {
    this.skillsPostJob.push({ id: uuid.v4(), link: '' });
  }
  skillChange(id, skill) {
    this.skillsPostJob.forEach((element) => {
      if (element.id == id) {
        element.skill = skill;
      }
    });
  }
  deleteSkill(id) {
    this.skillsPostJob = this.skillsPostJob.filter(
      (skill: any) => skill.id != id
    );
  }

  addQualification() {
    this.qualifications.push({ id: uuid.v4(), qualification: '' });
  }
  qualificationChange(id, qualification) {
    this.qualifications.forEach((element) => {
      if (element.id == id) {
        element.qualification = qualification;
      }
    });
  }
  deleteQualification(id) {
    this.qualifications = this.qualifications.filter(
      (qualification: any) => qualification.id != id
    );
  }

  sendPostAjobInformation() {
    if (this.postJobForm.valid) {
      let skillsWithoutId = this.skillsPostJob.map((e) => e.skill);
      let qualificationsWithoutId = this.qualifications.map(
        (e) => e.qualification
      );

      this.http
        .post(environment.API + '/job-post', {
          companyName: this.postJobForm.controls['company'].value,
          country: this.postJobForm.controls['country'].value,
          employementType: this.postJobForm.controls['employmentType'].value,
          experienceLevel: this.postJobForm.controls['experienceLevel'].value,
          id: uuid.v4(),
          jobDescription: this.postJobForm.controls['jobDescription'].value,
          jobLocation: this.postJobForm.controls['city'].value,
          jobRole: this.postJobForm.controls['jobTitle'].value,
          qualifications: qualificationsWithoutId,
          skills: skillsWithoutId,
          dateAndTime: Date.now(),
          status: true,
          user: {
            email: this.userSession.user.email,
            fullName: this.userSession.user.name,
            id: this.userSession.user.id,
          },
        })
        .subscribe(
          (res) => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Your post have been send successfully',
              showConfirmButton: false,
              timer: 2500,
            });
            this.clearInputs();
          },
          (error) => {
            console.log(error);
          }
        );
    } else {
      Swal.fire({
        icon: 'error',

        title: 'Please insert all the required fields ..',
        showClass: {
          popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp',
        },
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }

  clearInputs() {
    this.postJobForm = this.formBuilder.group({
      jobTitle: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(100)]),
      ],
      company: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(150)]),
      ],
      city: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(150)]),
      ],
      country: [{ value: 'Jordan', disabled: true }],
      jobDescription: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(150)]),
      ],
      experienceLevel: ['', Validators.compose([Validators.required])],
      employmentType: ['', Validators.compose([Validators.required])],
    });
    this.skillsPostJob = [{ id: uuid.v4(), skill: '' }];
    this.qualifications = [{ id: uuid.v4(), qualification: '' }];
  }
}
