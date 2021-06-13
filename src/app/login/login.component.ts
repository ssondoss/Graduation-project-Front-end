import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { UserSessionService } from '../user-session.service';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../app.component.scss'],
})
export class LoginComponent implements OnInit {
  wrongEmailOrPassword = false;
  loginFormGroup: FormGroup;
  constructor(
    public dialog: MatDialog,
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
      email: ['', Validators.compose([Validators.required])],
    });
  }
  public openDialogForgetPassword(): void {
    const dialogRef = this.dialog.open(ForgetPasswordComponent, {
      width: '500px',
      height: 'auto',
      maxWidth: '95%',
      maxHeight: '98%',
      data: {},
    });
  }

  login(): void {
    if (this.loginFormGroup.valid) {
      let http_param = new HttpParams()
        .append('email', this.loginFormGroup.controls['email'].value)
        .append('password', this.loginFormGroup.controls['password'].value);
      this.http.post(environment.API + '/user/login', http_param).subscribe(
        (res: any) => {
          localStorage.setItem('userToken', JSON.stringify(res));
          this.userSession.login();
        },
        (error) => {
          this.wrongEmailOrPassword = true;
        }
      );
    } else this.loginFormGroup.markAllAsTouched();
  }
}
