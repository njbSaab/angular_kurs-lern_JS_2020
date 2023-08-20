import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationComponentComponent } from './interpolation-component.component';

describe('InterpolationComponentComponent', () => {
  let component: InterpolationComponentComponent;
  let fixture: ComponentFixture<InterpolationComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterpolationComponentComponent]
    });
    fixture = TestBed.createComponent(InterpolationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
