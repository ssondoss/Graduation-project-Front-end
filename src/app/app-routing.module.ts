import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrownyStaticComponent } from './browse-templates/browny-static/browny-static.component';
import { BrowseTemplatesComponent } from './browse-templates/browse-templates.component';
import { DarkThemeStaticComponent } from './browse-templates/dark-theme-static/dark-theme-static.component';
import { FixedContainerStaticComponent } from './browse-templates/fixed-container-static/fixed-container-static.component';
import { FixedContainer2StaticComponent } from './browse-templates/fixed-container2-static/fixed-container2-static.component';
import { FixedContainer3StaticComponent } from './browse-templates/fixed-container3-static/fixed-container3-static.component';
import { LightThemeStaticComponent } from './browse-templates/light-theme-static/light-theme-static.component';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { BrownyComponent } from './cv-templates/browny/browny.component';
import { DarkThemeComponent } from './cv-templates/dark-theme/dark-theme.component';
import { FixedContainerComponent } from './cv-templates/fixed-container/fixed-container.component';
import { FixedContainer2Component } from './cv-templates/fixed-container2/fixed-container2.component';
import { FixedContainer3Component } from './cv-templates/fixed-container3/fixed-container3.component';
import { LightThemeComponent } from './cv-templates/light-theme/light-theme.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeerComponent } from './employeer/employeer.component';
import { FindJobComponent } from './find-job/find-job.component';
import { HomeComponent } from './home/home.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './my-account/change-password/change-password.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { MyApplicationComponent } from './my-account/my-application/my-application.component';
import { MyCvComponent } from './my-account/my-cv/my-cv.component';
import { MyPostsComponent } from './my-account/my-posts/my-posts.component';
import { PostDetailsComponent } from './my-account/post-details/post-details.component';
import { RegestrationComponent } from './regestration/regestration.component';
import { ResetPasswordLinkComponent } from './reset-password-link/reset-password-link.component';
import { SelectTemplateComponent } from './select-template/select-template.component';
import { SkillsComponent } from './skills/skills.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reset-password', component: ResetPasswordLinkComponent },

  { path: 'dark-theme-static', component: DarkThemeStaticComponent },
  { path: 'fixed-container-static', component: FixedContainerStaticComponent },
  {
    path: 'fixed-container2-static',
    component: FixedContainer2StaticComponent,
  },
  {
    path: 'fixed-container3-static',
    component: FixedContainer3StaticComponent,
  },

  { path: 'light-theme-static', component: LightThemeStaticComponent },

  { path: 'browse-templates', component: BrowseTemplatesComponent },
  { path: 'browny-static', component: BrownyStaticComponent },

  { path: 'my-cv', component: MyCvComponent },

  { path: 'job-details', component: JobDetailsComponent },
  { path: 'light-theme', component: LightThemeComponent },

  { path: 'my-applications', component: MyApplicationComponent },

  { path: 'post-details', component: PostDetailsComponent },

  { path: 'my-posts', component: MyPostsComponent },

  { path: 'change-password', component: ChangePasswordComponent },

  { path: 'employee', component: EmployeeComponent },
  { path: 'regestration', component: RegestrationComponent },

  { path: 'browse', component: VideosComponent },
  { path: 'my-account', component: MyAccountComponent },

  { path: 'select-template', component: SelectTemplateComponent },

  { path: 'fixed-container', component: FixedContainerComponent },
  { path: 'fixed-container2', component: FixedContainer2Component },
  { path: 'fixed-container3', component: FixedContainer3Component },

  { path: 'browny', component: BrownyComponent },
  { path: 'dark-theme', component: DarkThemeComponent },

  { path: 'login', component: LoginComponent },
  { path: 'contact-us', component: ContactUsComponent },

  { path: 'employer', component: EmployeerComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'find-job', component: FindJobComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
