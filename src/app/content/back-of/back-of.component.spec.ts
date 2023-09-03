import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackOfComponent } from './back-of.component';

describe('BackOfComponent', () => {
  let component: BackOfComponent;
  let fixture: ComponentFixture<BackOfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackOfComponent]
    });
    fixture = TestBed.createComponent(BackOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
