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
import Swal from 'sweetalert2';

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
import { MatDatepicker } from '@angular/material/datepicker';
import { emailValidator } from '../app.component';
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
  filledCv = false;
  eduactionFields = [];
  experienceFields = [];
  skills = [];
  personalInformation = false;
  skillsDiv = false;
  experienceDiv = false;
  educationDiv = false;
  contactDiv = false;
  personalInformationForm: FormGroup;
  skillForm = false;
  links = [];
  isSettedUp = false;
  constructor(
    public appService: AppService,
    public userSession: UserSessionService,
    public formBuilder: FormBuilder,
    public http: HttpClient,
    public router: Router
  ) {
    if (!this.userSession.isLoggedIn) {
      this.userSession.toLoginPage();
    }
  }

  startEducationDate = new FormControl(moment());
  endEducationDate = new FormControl(moment());
  startExperienceDate = new FormControl(moment());
  endExperienceDate = new FormControl(moment());

  chosenYearHandler(normalizedYear: Moment, date: FormControl) {
    const ctrlValue = date.value;
    ctrlValue.year(normalizedYear.year());
    date.setValue(ctrlValue);
  }

  chosenMonthHandlerStartEdu(
    normalizedMonth: Moment,
    datepicker: MatDatepicker<Moment>,
    date: FormControl,
    id: string
  ) {
    const ctrlValue = date.value;
    ctrlValue.month(normalizedMonth.month());
    date.setValue(ctrlValue);
    datepicker.close();
    let dateAsString = date.value._d + '';
    let dateArray = dateAsString.split(' ');
    this.eduactionFields.forEach((element) => {
      if (element.id == id) {
        element.startYear = dateArray[1] + '/' + dateArray[3];
      }
    });
  }

  chosenMonthHandlerEndEdu(
    normalizedMonth: Moment,
    datepicker: MatDatepicker<Moment>,
    date: FormControl,
    id: string
  ) {
    console.log('heres');
    const ctrlValue = date.value;
    ctrlValue.month(normalizedMonth.month());
    date.setValue(ctrlValue);
    datepicker.close();
    let dateAsString = date.value._d + '';
    let dateArray = dateAsString.split(' ');
    this.eduactionFields.forEach((element) => {
      if (element.id == id) {
        element.endYear = dateArray[1] + '/' + dateArray[3];
      }
    });
  }

  chosenMonthHandlerStartExp(
    normalizedMonth: Moment,
    datepicker: MatDatepicker<Moment>,
    date: FormControl,
    id: string
  ) {
    const ctrlValue = date.value;
    ctrlValue.month(normalizedMonth.month());
    date.setValue(ctrlValue);
    datepicker.close();
    let dateAsString = date.value._d + '';
    let dateArray = dateAsString.split(' ');
    this.experienceFields.forEach((element) => {
      if (element.id == id) {
        element.startYear = dateArray[1] + '/' + dateArray[3];
      }
    });
  }

  chosenMonthHandlerEndExp(
    normalizedMonth: Moment,
    datepicker: MatDatepicker<Moment>,
    date: FormControl,
    id: string
  ) {
    const ctrlValue = date.value;
    ctrlValue.month(normalizedMonth.month());
    date.setValue(ctrlValue);
    datepicker.close();
    let dateAsString = date.value._d + '';
    let dateArray = dateAsString.split(' ');
    this.experienceFields.forEach((element) => {
      if (element.id == id) {
        element.endYear = dateArray[1] + '/' + dateArray[3];
      }
    });
    console.log(this.experienceFields);
  }

  showPersonalInformation() {
    this.personalInformation = !this.personalInformation;
    this.experienceDiv = false;
    this.contactDiv = false;
    this.skillsDiv = false;
    this.educationDiv = false;
  }
  showEducation() {
    this.educationDiv = !this.educationDiv;
    this.experienceDiv = false;
    this.contactDiv = false;
    this.personalInformation = false;
    this.skillsDiv = false;
  }
  showExperienceDiv() {
    this.experienceDiv = !this.experienceDiv;
    this.skillsDiv = false;
    this.contactDiv = false;
    this.personalInformation = false;
    this.educationDiv = false;
  }
  showSkills() {
    this.skillsDiv = !this.skillsDiv;
    this.experienceDiv = false;
    this.contactDiv = false;
    this.personalInformation = false;
    this.educationDiv = false;
  }
  showContactInfo() {
    this.contactDiv = !this.contactDiv;
    this.experienceDiv = false;
    this.skillsDiv = false;
    this.personalInformation = false;
    this.educationDiv = false;
  }

  ngOnInit(): void {
    this.http
      .get(
        environment.API + '/cv-info/cv-by-user-id/' + this.userSession.user.id
      )
      .subscribe(
        (res) => {
          this.setupFilledForm(res);
        },
        (err) => {
          this.setupClearForm();
        }
      );
  }
  setupFilledForm(cvData) {
    this.filledCv = true;
    this.personalInformationForm = this.formBuilder.group({
      role: [cvData.role, Validators.compose([Validators.required])],
      name: [cvData.name, Validators.compose([Validators.required])],
      video: [cvData.video],
      about: [cvData.about, Validators.compose([Validators.required])],
      email: [
        cvData.email,
        Validators.compose([Validators.required, emailValidator]),
      ],
      phone: [
        cvData.phone,
        Validators.compose([Validators.required, Validators.maxLength(12)]),
      ],
      address: [cvData.address, Validators.compose([Validators.required])],
    });

    cvData.userEducation.forEach((element) => {
      this.eduactionFields.push({
        id: uuid.v4(),
        startYear: element.startYear,
        endYear: element.startYear,
        description: element.description,
      });
    });

    cvData.userExperience.forEach((element) => {
      this.experienceFields.push({
        id: uuid.v4(),
        startYear: element.startYear,
        endYear: element.startYear,
        description: element.description,
      });
    });

    cvData.userLinks.forEach((element) => {
      this.links.push({
        id: uuid.v4(),
        link: element.link,
        icon: element.icon,
      });
    });

    cvData.userSkills.forEach((element) => {
      this.skills.push({ id: uuid.v4(), skill: element });
    });

    this.uploadedVideoName = cvData.video;

    // this.personalInformation = true;
    // this.skillsDiv = true;
    // this.experienceDiv = true;
    // this.educationDiv = true;
    // this.contactDiv = true;
    // this.skillForm = true;

    this.isSettedUp = true;
  }
  setupClearForm() {
    this.personalInformationForm = this.formBuilder.group({
      role: ['', Validators.compose([Validators.required])],
      name: [
        this.userSession.user.fullName,
        Validators.compose([Validators.required]),
      ],
      video: [''],
      about: ['', Validators.compose([Validators.required])],
      email: [
        this.userSession.user.email,
        Validators.compose([Validators.required, emailValidator]),
      ],
      phone: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(12)]),
      ],
      address: ['', Validators.compose([Validators.required])],
    });
    this.eduactionFields = [];
    this.experienceFields = [];
    this.skills = [];
    this.personalInformation = false;
    this.skillsDiv = false;
    this.experienceDiv = false;
    this.educationDiv = false;
    this.contactDiv = false;
    this.skillForm = false;
    this.links = [];
    this.isSettedUp = true;
    this.uploadedVideoName = '';
  }

  addLink() {
    if (this.links.length < 4)
      this.links.push({ id: uuid.v4(), link: '', icon: '' });
    else
      Swal.fire({
        icon: 'error',

        title: 'Sorry , you cant add more than 4 external links ..',
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
    if (this.skills.length < 100)
      this.skills.push({ id: uuid.v4(), skill: '' });
    else
      Swal.fire({
        icon: 'error',

        title: 'Sorry , you cant add more than 100 skill ..',
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
    console.log(this.links);
  }

  changeExpDesc() {}

  changeEduDesc() {}
  addExperienceField() {
    if (this.experienceFields.length < 10)
      this.experienceFields.push({
        id: uuid.v4(),
        startYear: '',
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
  deleteExperienceField(id) {
    this.experienceFields = this.experienceFields.filter(
      (field: any) => field.id != id
    );
  }

  addDescriptionExperience(id, description) {
    this.experienceFields.forEach((element) => {
      if (element.id == id) {
        element.description = description;
      }
    });
    console.log(this.experienceFields);
  }
  // addEndEcucationDate(id, endDate) {
  //   this.eduactionFields.forEach((element) => {
  //     if (element.id == id) {
  //       element.startDate = endDate;
  //     }
  //   });
  // }
  addDescription(id, description) {
    this.eduactionFields.forEach((element) => {
      if (element.id == id) {
        element.description = description;
      }
    });
    console.log(this.eduactionFields);
  }

  uploadedVideoName = '';

  uploadVideo(event) {
    console.log('here');
    let exe = event.target.files[0].name.split('.').pop();
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('file', file, file.name);

      this.http
        .post(environment.API + '/file/upload?exe=.' + exe, formData)
        .subscribe(
          (res) => {
            console.log(res);
            this.uploadedVideoName = res + '';
            console.log(this.uploadedVideoName);
          },
          (error) => {
            console.log(error);
            if (error.status == 200) this.uploadedVideoName = error.error.text;
            console.log(this.uploadedVideoName);
          }
        );
    }
  }
  sendPersonalInformation() {
    if (
      this.personalInformationForm.valid ||
      this.uploadedVideoName.length > 1
    ) {
      let skills = this.skills.map((element) => element.skill);
      this.http
        .post(environment.API + '/cv-info', {
          address: this.personalInformationForm.controls['address'].value,
          email: this.personalInformationForm.controls['email'].value,
          phone: this.personalInformationForm.controls['phone'].value,
          cvTemplate: 'browny',
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
          video: this.uploadedVideoName,
        })
        .subscribe(
          (data) => {
            this.router.navigate(['/select-template']);
          },
          (error) => {
            alert('NOT DONE !');
          }
        );
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'please fill all required parts',
        showConfirmButton: false,
        timer: 2500,
      });
    }
  }

  getDate(date: string) {
    let dateValue = new Date(date);
    return new FormControl(dateValue);
  }

  getVideoSrc(video) {
    return environment.VIDEOS_BASE_URL + video;
  }
}
