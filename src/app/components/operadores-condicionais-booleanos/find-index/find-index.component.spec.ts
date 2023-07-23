import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindIndexComponent } from './find-index.component';

describe('FindIndexComponent', () => {
  let component: FindIndexComponent;
  let fixture: ComponentFixture<FindIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindIndexComponent]
    });
    fixture = TestBed.createComponent(FindIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
