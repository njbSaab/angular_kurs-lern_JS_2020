import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventToggleComponentsComponent } from './event-toggle-components.component';

describe('EventToggleComponentsComponent', () => {
  let component: EventToggleComponentsComponent;
  let fixture: ComponentFixture<EventToggleComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventToggleComponentsComponent]
    });
    fixture = TestBed.createComponent(EventToggleComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
