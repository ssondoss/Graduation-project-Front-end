import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { AngularFireModule } from '@angular/fire';
import { ReactiveFormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { EmployeerComponent } from './employeer/employeer.component';
import { VideosComponent } from './videos/videos.component';
import { RegestrationComponent } from './regestration/regestration.component';
import { LoginComponent } from './login/login.component';
import { NavbarScdComponent } from './navbar-scd/navbar-scd.component';
import { FooterScdComponent } from './footer-scd/footer-scd.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { NavDashboardComponent } from './nav-dashboard/nav-dashboard.component';
import { AppService } from './app.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

import {
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
} from '@angular/material/dialog';
import { PopoverModule } from 'ngx-smart-popover';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { NewSectionComponent } from './contact-information/new-section/new-section.component';
import { FindJobComponent } from './find-job/find-job.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { EmployerAccountComponent } from './employer-account/employer-account.component';
import { EmployeeAccountComponent } from './employee-account/employee-account.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserSessionService } from './user-session.service';
import { MatNativeDateModule } from '@angular/material/core';
import { BrownyComponent } from './cv-templates/browny/browny.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    EmployeeComponent,
    EmployeerComponent,
    VideosComponent,
    RegestrationComponent,
    LoginComponent,
    NavbarScdComponent,
    FooterScdComponent,
    ContactUsComponent,
    NavDashboardComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    ContactInformationComponent,
    NewSectionComponent,
    FindJobComponent,
    JobDetailsComponent,
    EmployerAccountComponent,
    EmployeeAccountComponent,
    BrownyComponent,
    BrownyComponent,
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule,
    FormsModule,
    ReactiveFormsModule,
    PopoverModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule,
    CommonModule,

    MatInputModule,

    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
    AppService,
    UserSessionService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
  ],

  bootstrap: [AppComponent],
  entryComponents: [NewSectionComponent],
})
export class AppModule {}
