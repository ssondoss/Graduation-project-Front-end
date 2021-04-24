import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-job',
  templateUrl: './find-job.component.html',
  styleUrls: ['./find-job.component.scss', '../app.component.scss'],
})
export class FindJobComponent implements OnInit {
  detalisDiv = false;
  constructor() {}

  ngOnInit(): void {}
  showDetails() {
    this.detalisDiv = !this.detalisDiv;
  }
}
