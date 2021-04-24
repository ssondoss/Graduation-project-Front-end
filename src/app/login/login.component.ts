import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { UserSessionService } from '../user-session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../app.component.scss'],
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  constructor(
    public http: HttpClient,
    public formBuilder: FormBuilder,
    public userSession: UserSessionService
  ) {}

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      password: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(100)]),
      ],
      email: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(150)]),
      ],
    });
  }

  login(): void {
    let http_param = new HttpParams()
      .append('email', this.loginFormGroup.controls['email'].value)
      .append('password', this.loginFormGroup.controls['password'].value);
    this.http.post(environment.API + '/user/login', http_param).subscribe(
      (res: any) => {
        localStorage.setItem('userToken', JSON.stringify(res));
        this.userSession.login();
      },
      (error) => {
        alert('wrong email');
      }
    );
  }
}
