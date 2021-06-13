import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedContainerStaticComponent } from './fixed-container-static.component';

describe('FixedContainerStaticComponent', () => {
  let component: FixedContainerStaticComponent;
  let fixture: ComponentFixture<FixedContainerStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedContainerStaticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedContainerStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
