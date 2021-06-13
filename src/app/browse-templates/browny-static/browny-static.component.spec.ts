import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrownyStaticComponent } from './browny-static.component';

describe('BrownyStaticComponent', () => {
  let component: BrownyStaticComponent;
  let fixture: ComponentFixture<BrownyStaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrownyStaticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrownyStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
