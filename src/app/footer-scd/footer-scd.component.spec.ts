import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterScdComponent } from './footer-scd.component';

describe('FooterScdComponent', () => {
  let component: FooterScdComponent;
  let fixture: ComponentFixture<FooterScdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterScdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterScdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
