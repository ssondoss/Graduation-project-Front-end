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
import { MatSelectModule } from '@angular/material/select/';
import { MatIconModule } from '@angular/material/icon';
import { environment } from 'src/environments/environment';
import { EmployeerComponent } from './employeer/employeer.component';
import { VideosComponent } from './videos/videos.component';
import { RegestrationComponent } from './regestration/regestration.component';
import { LoginComponent } from './login/login.component';
import { FooterScdComponent } from './footer-scd/footer-scd.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
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
import { SkillsComponent } from './skills/skills.component';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { FindJobComponent } from './find-job/find-job.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserSessionService } from './user-session.service';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { BrownyComponent } from './cv-templates/browny/browny.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { HalfsComponent } from './cv-templates/halfs/halfs.component';
import { FixedContainerComponent } from './cv-templates/fixed-container/fixed-container.component';
import { SelectTemplateComponent } from './select-template/select-template.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { SideNavComponent } from './my-account/side-nav/side-nav.component';
import { ChangePasswordComponent } from './my-account/change-password/change-password.component';
import { MyPostsComponent } from './my-account/my-posts/my-posts.component';
import { PostDetailsComponent } from './my-account/post-details/post-details.component';
import { MyApplicationComponent } from './my-account/my-application/my-application.component';
import { DarkThemeComponent } from './cv-templates/dark-theme/dark-theme.component';
import { LightThemeComponent } from './cv-templates/light-theme/light-theme.component';
import { FixedContainer2Component } from './cv-templates/fixed-container2/fixed-container2.component';
import { FixedContainer3Component } from './cv-templates/fixed-container3/fixed-container3.component';
import { CvLinkComponent } from './select-template/cv-link/cv-link.component';
import { MyCvComponent } from './my-account/my-cv/my-cv.component';
import { BrowseTemplatesComponent } from './browse-templates/browse-templates.component';
import { BrownyStaticComponent } from './browse-templates/browny-static/browny-static.component';
import { LightThemeStaticComponent } from './browse-templates/light-theme-static/light-theme-static.component';
import { DarkThemeStaticComponent } from './browse-templates/dark-theme-static/dark-theme-static.component';
import { FixedContainerStaticComponent } from './browse-templates/fixed-container-static/fixed-container-static.component';
import { FixedContainer2StaticComponent } from './browse-templates/fixed-container2-static/fixed-container2-static.component';
import { FixedContainer3StaticComponent } from './browse-templates/fixed-container3-static/fixed-container3-static.component';
import { ForgetPasswordComponent } from './login/forget-password/forget-password.component';
import { ResetPasswordLinkComponent } from './reset-password-link/reset-password-link.component';

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
    FooterScdComponent,
    ContactUsComponent,
    SkillsComponent,
    FindJobComponent,
    JobDetailsComponent,
    BrownyComponent,
    HalfsComponent,
    FixedContainerComponent,
    SelectTemplateComponent,
    MyAccountComponent,
    SideNavComponent,
    ChangePasswordComponent,
    MyPostsComponent,
    PostDetailsComponent,
    MyApplicationComponent,
    DarkThemeComponent,
    LightThemeComponent,
    FixedContainer2Component,
    FixedContainer3Component,
    CvLinkComponent,
    MyCvComponent,
    BrowseTemplatesComponent,
    BrownyStaticComponent,
    LightThemeStaticComponent,
    DarkThemeStaticComponent,
    FixedContainerStaticComponent,
    FixedContainer2StaticComponent,
    FixedContainer3StaticComponent,
    ForgetPasswordComponent,
    ResetPasswordLinkComponent,
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule,
    FormsModule,
    ReactiveFormsModule,
    PopoverModule,
    MatDialogModule,
    MatRippleModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule,
    CommonModule,
    MatSelectModule,
    MaterialFileInputModule,
    MatIconModule,
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
  entryComponents: [],
})
export class AppModule {}
