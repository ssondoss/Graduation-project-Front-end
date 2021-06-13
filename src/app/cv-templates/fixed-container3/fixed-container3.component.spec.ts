import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedContainer3Component } from './fixed-container3.component';

describe('FixedContainer3Component', () => {
  let component: FixedContainer3Component;
  let fixture: ComponentFixture<FixedContainer3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedContainer3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedContainer3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
