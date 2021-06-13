import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { emailValidator } from 'src/app/app.component';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss', '../../app.component.scss'],
})
export class ForgetPasswordComponent implements OnInit {
  forgetPasswordForm: FormGroup;
  emailNotFound = false;
  constructor(
    public dialogRef: MatDialogRef<ForgetPasswordComponent>,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.forgetPasswordForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, emailValidator])],
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  sendEmail() {
    if (this.forgetPasswordForm.valid) {
      let http_param = new HttpParams().append(
        'email',
        this.forgetPasswordForm.controls['email'].value
      );
      this.http.post(environment.API + '/reset-password', http_param).subscribe(
        (res) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'the link sent to your email successfully',
            showConfirmButton: false,
            timer: 4000,
          });
          this.dialogRef.close();
        },
        (err) => {
          this.emailNotFound = true;
        }
      );
    } else this.forgetPasswordForm.markAllAsTouched();
  }
}
