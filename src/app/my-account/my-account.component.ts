import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'firebase';
import { environment } from 'src/environments/environment';
import { emailValidator } from '../app.component';
import { UserSessionService } from '../user-session.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss', '../app.component.scss'],
})
export class MyAccountComponent implements OnInit {
  accountInfoForm: FormGroup;
  user: User;
  accountInformation;

  constructor(
    public dialog: MatDialog,
    private userSession: UserSessionService,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    if (userSession.isLoggedIn) {
      this.http
        .get(environment.API + '/user/' + this.userSession.user.id)
        .subscribe((res) => {
          this.accountInformation = res;
          this.accountInfoForm = this.fb.group({
            // phone: [
            //   '',
            //   Validators.compose([
            //     Validators.required,
            //     Validators.minLength(10),
            //     Validators.maxLength(15),
            //     // prettier-ignore
            //     Validators.pattern("[0-9]*"),
            //   ]),
            // ],
            email: new FormControl({
              value: this.accountInformation.email,
              disabled: true,
            }),
            name: [
              this.accountInformation.fullName,
              Validators.compose([
                Validators.required,
                Validators.maxLength(150),
                Validators.minLength(3),
              ]),
            ],
          });
        });
    } else {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.accountInfoForm = this.fb.group({
      // phone: [
      //   '',
      //   Validators.compose([
      //     Validators.required,
      //     Validators.minLength(10),
      //     Validators.maxLength(15),
      //     // prettier-ignore
      //     Validators.pattern("[0-9]*"),
      //   ]),
      // ],
      email: [
        '',
        // Validators.compose([
        //   Validators.required,
        //   Validators.maxLength(150),
        //   emailValidator,
        // ]),
      ],
      name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(150),
          Validators.minLength(3),
        ]),
      ],
    });
  }
  updateAccountInformation() {
    if (this.accountInfoForm.valid) {
      let http_param = new HttpParams().append(
        'name',
        this.accountInfoForm.controls['name'].value
      );
      this.http
        .put(environment.API + '/user/' + this.userSession.user.id, http_param)
        .subscribe((res) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your personal information updated successfully',
            showConfirmButton: false,
            timer: 2000,
          });
        });
    } else this.accountInfoForm.markAllAsTouched();
  }
}
