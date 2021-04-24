import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrownyComponent } from './browny.component';

describe('BrownyComponent', () => {
  let component: BrownyComponent;
  let fixture: ComponentFixture<BrownyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrownyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrownyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
