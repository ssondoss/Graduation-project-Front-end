import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactInformationComponent } from './contact-information/contact-information.component';
import { NewSectionComponent } from './contact-information/new-section/new-section.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BrownyComponent } from './cv-templates/browny/browny.component';
import { EducationComponent } from './education/education.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeerComponent } from './employeer/employeer.component';
import { ExperienceComponent } from './experience/experience.component';
import { FindJobComponent } from './find-job/find-job.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegestrationComponent } from './regestration/regestration.component';
import { SkillsComponent } from './skills/skills.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'regestration', component: RegestrationComponent },

  { path: 'browse', component: VideosComponent },
  { path: 'browny', component: BrownyComponent },

  { path: 'login', component: LoginComponent },
  { path: 'contact-us', component: ContactUsComponent },

  { path: 'employer', component: EmployeerComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact-information', component: ContactInformationComponent },
  { path: 'find-job', component: FindJobComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
