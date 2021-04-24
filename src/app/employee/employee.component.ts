import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import * as uuid from 'uuid';
import { FormControl } from '@angular/forms';
import { UserSessionService } from '../user-session.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { element } from 'protractor';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import * as _moment from 'moment';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { default as _rollupMoment, Moment } from 'moment';
const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss', '../app.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class EmployeeComponent implements OnInit {
  eduactionFields;
  experienceFields;
  skills;
  personalInformation = false;
  skillsDiv = false;
  experienceDiv = false;
  educationDiv = false;
  contactDiv = false;
  personalInformationForm: FormGroup;
  skillForm = false;
  links = [];
  constructor(
    public appService: AppService,
    public userSession: UserSessionService,
    public formBuilder: FormBuilder,
    public http: HttpClient,
    public router: Router
  ) {
    if (!this.userSession.isLoggedIn) {
      this.userSession.toHome();
    }
  }
  showPersonalInformation() {
    this.personalInformation = !this.personalInformation;
  }
  showEducation() {
    this.educationDiv = !this.educationDiv;
  }
  showExperienceDiv() {
    this.experienceDiv = !this.experienceDiv;
  }
  showSkills() {
    this.skillsDiv = !this.skillsDiv;
  }
  showContactInfo() {
    this.contactDiv = !this.contactDiv;
  }

  ngOnInit(): void {
    this.personalInformationForm = this.formBuilder.group({
      role: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(100)]),
      ],
      name: [
        this.userSession.user.fullName,
        Validators.compose([Validators.required, Validators.maxLength(150)]),
      ],
      video: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(150)]),
      ],
      about: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(150)]),
      ],
      email: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(150)]),
      ],
      phone: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(150)]),
      ],
      address: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(150)]),
      ],
    });

    this.links = [{ id: uuid.v4(), link: '', icon: '' }];
    this.eduactionFields = [
      {
        id: uuid.v4(),
        startYear: '',
        endYear: '',
        description: '',
      },
    ];
    this.experienceFields = [
      {
        id: uuid.v4(),
        startYear: '',
        startMonth: '',
        endMonth: '',
        endYear: '',
        description: '',
      },
    ];
    this.skills = [{ id: uuid.v4(), skill: '' }];
  }

  addLink() {
    if (this.links.length < 4)
      this.links.push({ id: uuid.v4(), link: '', icon: '' });
    else alert("can't add !");
  }
  deleteLink(id) {
    console.log(id);
    this.links = this.links.filter((link: any) => link.id != id);
  }

  addLinkChange(id, link) {
    this.links.forEach((element) => {
      if (element.id == id) {
        element.link = link;
      }
    });

    console.log(this.links);
  }

  addSkill() {
    if (this.skills.length < 30) this.skills.push({ id: uuid.v4(), skill: '' });
    else alert("can't add !");
  }
  deleteSkill(id) {
    this.skills = this.skills.filter((skill: any) => skill.id != id);
  }

  skillChange(id, skill) {
    this.skills.forEach((element) => {
      if (element.id == id) {
        element.skill = skill;
      }
    });
    let skills = this.skills.map((element) => element.skill);
    console.log(skills);
  }
  addIcon(id, icon) {
    this.links.forEach((element) => {
      if (element.id == id) {
        element.icon = icon;
      }
    });
  }
  addExperienceField() {
    if (this.experienceFields.length < 10)
      this.experienceFields.push({
        id: uuid.v4(),
        startYear: '',
        startMonth: '',
        endMonth: '',
        endYear: '',
        description: '',
      });
    else alert("can't add !");
  }
  addEducationField() {
    if (this.eduactionFields.length < 10)
      this.eduactionFields.push({
        id: uuid.v4(),
        startYear: '',
        endYear: '',
        description: '',
      });
  }
  deleteEducationField(id) {
    console.log(id);
    this.eduactionFields = this.eduactionFields.filter(
      (field: any) => field.id != id
    );
  }

  addStartDate(id, startDate) {
    this.eduactionFields.forEach((element) => {
      if (element.id == id) {
        element.startDate = startDate;
      }
    });
  }
  addStartMonthExperience(id, startMonth) {
    this.experienceFields.forEach((element) => {
      if (element.id == id) {
        element.startMonth = startMonth;
      }
    });
  }
  addStartYearExperience(id, startYear) {
    this.experienceFields.forEach((element) => {
      if (element.id == id) {
        element.startYear = startYear;
      }
    });
  }
  addEndMonthExperience(id, endMonth) {
    this.experienceFields.forEach((element) => {
      if (element.id == id) {
        element.endMonth = endMonth;
      }
    });
  }
  addEndYearExperience(id, endYear) {
    this.experienceFields.forEach((element) => {
      if (element.id == id) {
        element.endYear = endYear;
      }
    });
  }
  addDescriptionExperience(id, description) {
    this.eduactionFields.forEach((element) => {
      if (element.id == id) {
        element.startDate = description;
      }
    });
  }
  addEndDate(id, endDate) {
    this.eduactionFields.forEach((element) => {
      if (element.id == id) {
        element.startDate = endDate;
      }
    });
  }
  addDescription(id, description) {
    this.eduactionFields.forEach((element) => {
      if (element.id == id) {
        element.startDate = description;
      }
    });
  }
  sendPersonalInformation() {
    console.log('here');

    let skills = this.skills.map((element) => element.skill);
    this.http
      .post(environment.API + '/cv-info', {
        address: this.personalInformationForm.controls['address'].value,
        email: this.personalInformationForm.controls['email'].value,
        phone: this.personalInformationForm.controls['phone'].value,

        about: this.personalInformationForm.controls['about'].value,
        id: uuid.v4(),
        name: this.personalInformationForm.controls['name'].value,
        role: this.personalInformationForm.controls['role'].value,
        user: {
          email: this.userSession.user.email,
          fullName: this.userSession.user.name,
          id: this.userSession.user.id,
        },
        userEducation: this.eduactionFields,
        userExperience: this.experienceFields,
        userSkills: skills,
        userLinks: this.links,
        video: this.personalInformationForm.controls['video'].value,
      })
      .subscribe(
        (data) => {
          alert('DONE !');
        },
        (error) => {
          alert('NOT DONE !');
        }
      );
  }
}
