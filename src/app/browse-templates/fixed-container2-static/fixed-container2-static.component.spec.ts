import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedContainer2StaticComponent } from './fixed-container2-static.component';

describe('FixedContainer2StaticComponent', () => {
  let component: FixedContainer2StaticComponent;
  let fixture: ComponentFixture<FixedContainer2StaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedContainer2StaticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedContainer2StaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
