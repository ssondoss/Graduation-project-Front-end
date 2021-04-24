import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-regestration',
  templateUrl: './regestration.component.html',
  styleUrls: ['./regestration.component.scss', '../app.component.scss'],
})
export class RegestrationComponent implements OnInit {
  registrationForm: FormGroup;
  constructor(public http: HttpClient, public formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      fullName: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(100)]),
      ],
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
  registration(): void {
    this.http
      .post(environment.API + '/user', {
        fullName: this.registrationForm.controls['fullName'].value,
        password: this.registrationForm.controls['password'].value,
        email: this.registrationForm.controls['email'].value,
      })
      .subscribe((res: any) => {
        alert('success'),
          (error) => {
            alert('wrong');
          };
      });
  }
}
