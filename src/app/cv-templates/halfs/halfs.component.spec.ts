import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfsComponent } from './halfs.component';

describe('HalfsComponent', () => {
  let component: HalfsComponent;
  let fixture: ComponentFixture<HalfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalfsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
