import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { matchingPasswords } from '../app.component';
import { UserSessionService } from '../user-session.service';

@Component({
  selector: 'app-reset-password-link',
  templateUrl: './reset-password-link.component.html',
  styleUrls: ['./reset-password-link.component.scss', '../app.component.scss'],
})
export class ResetPasswordLinkComponent implements OnInit {
  resetPasswordForm: FormGroup;
  userId;
  code;
  requestId: any;
  constructor(
    public http: HttpClient,
    public formBuilder: FormBuilder,
    public userSession: UserSessionService,
    public router: Router,
    private activeRouter: ActivatedRoute
  ) {
    this.activeRouter.queryParams.subscribe((params) => {
      this.userId = params['user-id'];
      this.code = params['code'];
      if (this.userId == undefined || this.code == undefined) {
        this.router.navigate(['/']);
      } else {
        let http_param = new HttpParams()
          .append('code', this.code)
          .append('userId', this.userId);
        this.http
          .get(environment.API + '/reset-password', { params: http_param })
          .subscribe(
            (res: any) => {
              this.requestId = res.id;
              if (res.isUsed) {
                // code is used
                Swal.fire({
                  position: 'center',
                  icon: 'warning',
                  title: 'Reset password link is used',
                  showConfirmButton: false,
                  timer: 2500,
                });
                this.router.navigate(['/']);
              }
            },
            (err) => {
              // code is wrong - invalid -
              Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Reset password link is invalid',
                showConfirmButton: false,
                timer: 2500,
              });
              this.router.navigate(['/']);
            }
          );
      }
    });
  }

  ngOnInit(): void {
    this.resetPasswordForm = this.formBuilder.group(
      {
        newPassword: [
          '',
          Validators.compose([
            Validators.required,
            Validators.maxLength(100),
            Validators.minLength(6),
          ]),
        ],
        confirmPassword: [
          '',
          Validators.compose([
            Validators.required,
            Validators.maxLength(100),
            Validators.minLength(6),
          ]),
        ],
      },
      {
        validator: matchingPasswords('newPassword', 'confirmPassword'),
      }
    );
  }
  resetPassword(): void {
    if (this.resetPasswordForm.valid) {
      let http_param = new HttpParams().append(
        'password',
        this.resetPasswordForm.controls['newPassword'].value
      );
      this.http
        .put(
          environment.API + '/user/reset-password/' + this.userId,
          http_param
        )
        .subscribe(
          (res: any) => {
            this.http
              .put(environment.API + '/reset-password/' + this.requestId, {})
              .subscribe();
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'your password updated successfully',
              showConfirmButton: false,
              timer: 2000,
            });
            this.router.navigate(['/login']);
          },
          (error) => {}
        );
    } else this.resetPasswordForm.markAllAsTouched();
  }
}
