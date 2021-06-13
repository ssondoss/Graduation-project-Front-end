import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { matchingPasswords } from 'src/app/app.component';
import { ForgetPasswordComponent } from 'src/app/login/forget-password/forget-password.component';
import { UserSessionService } from 'src/app/user-session.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss', '../../app.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;
  constructor(
    public dialog: MatDialog,

    private fb: FormBuilder,
    private http: HttpClient,
    private userSession: UserSessionService,
    private router: Router
  ) {
    if (!this.userSession.isLoggedIn) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.changePasswordForm = this.fb.group(
      {
        oldPassword: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(100),
          ]),
        ],
        newPassword: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(100),
          ]),
        ],
        repeatNewPassword: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(100),
          ]),
        ],
      },
      {
        validator: matchingPasswords('newPassword', 'repeatNewPassword'),
      }
    );
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
  updatePassword() {
    if (this.changePasswordForm.valid) {
      let http_param = new HttpParams()
        .append(
          'password',
          this.changePasswordForm.controls['newPassword'].value
        )
        .append(
          'oldPassword',
          this.changePasswordForm.controls['oldPassword'].value
        );
      this.http
        .put(
          environment.API + '/user/password/' + this.userSession.user.id,
          http_param
        )
        .subscribe(
          (res) => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'your password changer successfully',
              showConfirmButton: false,
              timer: 2000,
            });
          },
          (err) => {
            Swal.fire({
              icon: 'error',

              title: 'recheck your old password and try again ..',
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
        );
    } else this.changePasswordForm.markAllAsTouched();
  }
}
