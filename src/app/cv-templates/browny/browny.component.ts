import { query } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-browny',
  templateUrl: './browny.component.html',
  styleUrls: ['./browny.component.scss'],
})
export class BrownyComponent implements OnInit {
  id: any;
  cvData;
  constructor(private activeRouter: ActivatedRoute, private http: HttpClient) {
    activeRouter.queryParams.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.http
      .get(environment.API + '/cv-info/cv-by-user-id/' + this.id)
      .subscribe(
        (res) => {
          this.cvData = res;
          console.log(this.cvData);
        },
        (err) => {}
      );
  }
  public getVideoSrc(video) {
    return environment.VIDEOS_BASE_URL + video;
  }
}
