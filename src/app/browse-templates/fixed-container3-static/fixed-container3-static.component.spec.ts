import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedContainer3StaticComponent } from './fixed-container3-static.component';

describe('FixedContainer3StaticComponent', () => {
  let component: FixedContainer3StaticComponent;
  let fixture: ComponentFixture<FixedContainer3StaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedContainer3StaticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedContainer3StaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
