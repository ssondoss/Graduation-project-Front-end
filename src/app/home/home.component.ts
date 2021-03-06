import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserSessionService } from '../user-session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../app.component.scss'],
})
export class HomeComponent implements OnInit {
  registerationFormGroup: FormGroup;

  constructor(
    private userSession: UserSessionService,
    public firestore: AngularFirestore,
    public formBuilder: FormBuilder,
    public router: Router
  ) {}
  ngOnInit(): void {
    this.registerationFormGroup = this.formBuilder.group({
      email: [
        '',
        Validators.compose([Validators.required, Validators.maxLength(150)]),
      ],
      password: ['', Validators.required],
      username: ['', Validators.required],
    });
  }
  registerUser() {
    this.firestore.collection('users').add(this.registerationFormGroup.value);
  }

  add() {
    let ref = this.firestore.doc<any>(
      'users/' + this.registerationFormGroup.controls['email'].value
    );

    ref.snapshotChanges().subscribe((s) => {
      if (s.payload.exists) {
        // ALERT
        alert('Email already registered');
      } else {
        // INSERT
        ref.set({
          email: this.registerationFormGroup.controls['email'].value,
          password: this.registerationFormGroup.controls['password'].value,
          username: this.registerationFormGroup.controls['username'].value,
        });
        this.registerationFormGroup = this.formBuilder.group({
          email: [
            '',
            Validators.compose([
              Validators.required,
              Validators.maxLength(150),
            ]),
          ],
          password: ['', Validators.required],
          username: ['', Validators.required],
        });
        alert('USER ADDED !');
      }
    });
  }
  startMyCv() {
    if (this.userSession.isLoggedIn) {
      this.router.navigate(['/employee']);
    } else this.router.navigate(['/login']);
  }
}
