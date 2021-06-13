import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { emailValidator } from '../app.component';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss', '../app.component.scss'],
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  constructor(private http: HttpClient, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, emailValidator])],
      name: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(200)]),
      ],
      message: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(800)]),
      ],
    });
  }

  sendMessage() {
    if (this.contactForm.valid) {
      this.http
        .post(environment.API + '/contact-message', this.contactForm.value)
        .subscribe((res) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title:
              'Your message sent successfully , please wait for the reply on your email ',
            showConfirmButton: false,
            timer: 3000,
          });
          this.contactForm = this.formBuilder.group({
            email: [
              '',
              Validators.compose([Validators.required, emailValidator]),
            ],
            name: [
              '',
              Validators.compose([
                Validators.required,
                Validators.maxLength(200),
              ]),
            ],
            message: [
              '',
              Validators.compose([
                Validators.required,
                Validators.maxLength(800),
              ]),
            ],
          });
        });
    } else this.contactForm.markAllAsTouched();
  }
}
