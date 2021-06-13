import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightThemeStaticComponent } from './light-theme-static.component';

describe('LightThemeStaticComponent', () => {
  let component: LightThemeStaticComponent;
  let fixture: ComponentFixture<LightThemeStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightThemeStaticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightThemeStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
