import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkThemeStaticComponent } from './dark-theme-static.component';

describe('DarkThemeStaticComponent', () => {
  let component: DarkThemeStaticComponent;
  let fixture: ComponentFixture<DarkThemeStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarkThemeStaticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkThemeStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
