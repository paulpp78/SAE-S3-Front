import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCommunauteComponent } from './event-communaute.component';

describe('EventCommunauteComponent', () => {
  let component: EventCommunauteComponent;
  let fixture: ComponentFixture<EventCommunauteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventCommunauteComponent]
    });
    fixture = TestBed.createComponent(EventCommunauteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
