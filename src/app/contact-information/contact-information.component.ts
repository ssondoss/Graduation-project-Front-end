import { Component, OnInit } from '@angular/core';
import { NewSectionComponent } from './new-section/new-section.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss', '../app.component.scss'],
})
export class ContactInformationComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  public openDialogNewSection(): void {
    const dialogRef = this.dialog.open(NewSectionComponent, {
      width: '600px',
      height: 'auto',
      maxWidth: '95%',
      maxHeight: '98%',
      data: {},
    });
  }
}
