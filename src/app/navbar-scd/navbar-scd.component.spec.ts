import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarScdComponent } from './navbar-scd.component';

describe('NavbarScdComponent', () => {
  let component: NavbarScdComponent;
  let fixture: ComponentFixture<NavbarScdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarScdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarScdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
