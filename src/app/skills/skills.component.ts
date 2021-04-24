import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss', '../app.component.scss'],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  // sendPersonalInformation() {
  //   this.http
  //     .post(environment.API + '/cv-info', {
  //       about: this.personalInformationForm.controls['about'].value,
  //       id: Date.now + '',
  //       name: this.personalInformationForm.controls['name'].value,
  //       role: this.personalInformationForm.controls['role'].value,
  //       user: {
  //         email: this.userSession.user.email,
  //         fullName: this.userSession.user.name,
  //         id: this.userSession.user.id,
  //       },
  //       userLinks: this.links,
  //       video: this.personalInformationForm.controls['video'].value,
  //     })
  //     .subscribe(
  //       (res: any) => {

  //       },
  //       (error) => {
  //         alert('not done');
  //       }
  //     );
  // }
}
