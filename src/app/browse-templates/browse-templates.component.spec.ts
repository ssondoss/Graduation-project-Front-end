import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseTemplatesComponent } from './browse-templates.component';

describe('BrowseTemplatesComponent', () => {
  let component: BrowseTemplatesComponent;
  let fixture: ComponentFixture<BrowseTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseTemplatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
