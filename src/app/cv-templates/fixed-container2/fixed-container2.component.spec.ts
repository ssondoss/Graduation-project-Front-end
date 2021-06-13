import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedContainer2Component } from './fixed-container2.component';

describe('FixedContainer2Component', () => {
  let component: FixedContainer2Component;
  let fixture: ComponentFixture<FixedContainer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedContainer2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedContainer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
