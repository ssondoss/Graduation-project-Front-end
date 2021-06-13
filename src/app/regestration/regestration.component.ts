import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { emailValidator } from '../app.component';
import { UserSessionService } from '../user-session.service';

@Component({
  selector: 'app-regestration',
  templateUrl: './regestration.component.html',
  styleUrls: ['./regestration.component.scss', '../app.component.scss'],
})
export class RegestrationComponent implements OnInit {
  registrationForm: FormGroup;
  emailUsed = false;
  constructor(
    public http: HttpClient,
    public formBuilder: FormBuilder,
    public userSession: UserSessionService,
    public router: Router
  ) {
    if (userSession.isLoggedIn) {
      router.navigate(['./']);
    }
  }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      fullName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(100),
          Validators.minLength(3),
        ]),
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(100),
          Validators.minLength(6),
        ]),
      ],
      email: ['', Validators.compose([Validators.required, emailValidator])],
    });
  }
  registration(): void {
    if (this.registrationForm.valid) {
      this.http
        .post(environment.API + '/user', {
          fullName: this.registrationForm.controls['fullName'].value,
          password: this.registrationForm.controls['password'].value,
          email: this.registrationForm.controls['email'].value,
        })
        .subscribe(
          (res: any) => {
            let http_param = new HttpParams()
              .append('email', this.registrationForm.controls['email'].value)
              .append(
                'password',
                this.registrationForm.controls['password'].value
              );
            this.http
              .post(environment.API + '/user/login', http_param)
              .subscribe(
                (res: any) => {
                  localStorage.setItem('userToken', JSON.stringify(res));
                  this.userSession.login();
                },
                (error) => {}
              );
          },
          (error) => {
            this.emailUsed = true;
          }
        );
    } else this.registrationForm.markAllAsTouched();
  }
}
