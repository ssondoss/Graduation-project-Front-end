import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { UserSessionService } from '../user-session.service';
import { CvLinkComponent } from './cv-link/cv-link.component';

@Component({
  selector: 'app-select-template',
  templateUrl: './select-template.component.html',
  styleUrls: ['./select-template.component.scss', '../app.component.scss'],
})
export class SelectTemplateComponent implements OnInit {
  constructor(
    private userService: UserSessionService,
    public dialog: MatDialog,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}
  public openDialogCvLink(templateName): void {
    this.http
      .put(
        environment.API +
          '/cv-info/update-cv-template/' +
          this.userService.user.id +
          '/' +
          templateName,
        {}
      )
      .subscribe((res) => {});
    const dialogRef = this.dialog.open(CvLinkComponent, {
      width: '800px',
      height: 'auto',
      maxWidth: '95%',
      maxHeight: '98%',
      data: {
        link:
          'http://localhost:4200/' +
          templateName +
          '?id=' +
          this.userService.user.id,
      },
    });
  }

  routeToBrown() {
    window.open('/browny?id=' + this.userService.user.id);
  }
  routeToDarkTheme() {
    window.open('/dark-theme?id=' + this.userService.user.id);
  }
  routeFixedContainer() {
    window.open('/fixed-container?id=' + this.userService.user.id);
  }
  routeFixedContainer2() {
    window.open('/fixed-container2?id=' + this.userService.user.id);
  }
  routeToLightTheme() {
    window.open('/light-theme?id=' + this.userService.user.id);
  }
  routeFixedContainer3() {
    window.open('/fixed-container3?id=' + this.userService.user.id);
  }
}
