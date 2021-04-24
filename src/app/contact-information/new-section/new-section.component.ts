import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-section',
  templateUrl: './new-section.component.html',
  styleUrls: ['./new-section.component.scss', '../../app.component.scss'],
})
export class NewSectionComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<NewSectionComponent>) {}

  ngOnInit(): void {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
