import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss', '../app.component.scss'],
})
export class VideosComponent implements OnInit {
  sidebar = false;
  allCVsInfo;
  constructor(public http: HttpClient, private router: Router) {
    this.http.get(environment.API + '/cv-info').subscribe(
      (res) => {
        this.allCVsInfo = res;
        console.log(this.allCVsInfo);
      },
      (err) => {}
    );
  }
  getVideoSource(videoName) {
    return environment.VIDEOS_BASE_URL + videoName;
  }
  ngOnInit(): void {}
  showSidebar() {
    this.sidebar = !this.sidebar;
  }
  exploreMyCV(id) {
    this.http
      .get(environment.API + '/cv-info/cv-by-user-id/' + id, {})
      .subscribe((res: any) => {
        window.open('../' + res.cvTemplate + '?id=' + res.user.id);
        // this.router.navigate(['../' + res.cvTemplate], {
        //   queryParams: { id: res.user.id },
        // });
      });
  }
}
