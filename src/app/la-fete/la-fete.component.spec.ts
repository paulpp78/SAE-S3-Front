import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaFeteComponent } from './la-fete.component';

describe('LaFeteComponent', () => {
  let component: LaFeteComponent;
  let fixture: ComponentFixture<LaFeteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaFeteComponent]
    });
    fixture = TestBed.createComponent(LaFeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
