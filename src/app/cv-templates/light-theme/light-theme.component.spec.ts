import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightThemeComponent } from './light-theme.component';

describe('LightThemeComponent', () => {
  let component: LightThemeComponent;
  let fixture: ComponentFixture<LightThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightThemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
