import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cv-link',
  templateUrl: './cv-link.component.html',
  styleUrls: ['./cv-link.component.scss', '../../app.component.scss'],
})
export class CvLinkComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CvLinkComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  isCopied = false;

  ngOnInit(): void {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  copyUrl(input) {
    input.select();
    document.execCommand('copy');

    this.isCopied = true;
  }
}
