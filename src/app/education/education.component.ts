import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserSessionService } from '../user-session.service';
import * as uuid from 'uuid';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss', '../app.component.scss'],
})
export class EducationComponent implements OnInit {
  eduactionFields;
  educationForm;
  cvInformationModel: any;

  constructor(
    public formBuilder: FormBuilder,
    public userSession: UserSessionService,
    public http: HttpClient,
    public router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params === {}) router.navigate(['employee']);
      let user = JSON.parse(params.user + '');
      let userLinks = JSON.parse(params.userLinks + '');
      this.cvInformationModel = {
        about: params.about,
        name: params.name,
        role: params.role,
        user: user,
        userLinks: userLinks,
        video: params.video,
      };
    });
    if (!this.userSession.isLoggedIn) {
      this.userSession.toHome();
    }
  }

  ngOnInit(): void {
    this.eduactionFields = [
      {
        id: uuid.v4(),
        startYear: '',
        endYear: '',
        description: '',
      },
    ];
  }

  addEducationField() {
    if (this.eduactionFields.length < 10)
      this.eduactionFields.push({
        id: uuid.v4(),
        startYear: '',
        endYear: '',
        description: '',
      });
    else alert("can't add !");
  }
  deleteEducationField(id) {
    console.log(id);
    this.eduactionFields = this.eduactionFields.filter(
      (field: any) => field.id != id
    );
  }

  sendEducationFields() {
    this.cvInformationModel.userEducation = this.eduactionFields;
    console.log(this.cvInformationModel);
    this.http
      .post(environment.API + '/cv-info', {
        userLinks: this.cvInformationModel,
      })
      .subscribe(
        (res: any) => {
          this.router.navigate(['/education']);
        },
        (error) => {
          alert('not done');
        }
      );
  }
  addStartDate(id, startDate) {
    this.eduactionFields.forEach((element) => {
      if (element.id == id) {
        element.startDate = startDate;
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
}
