import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsEmptyComponent } from './is-empty.component';

describe('IsEmptyComponent', () => {
  let component: IsEmptyComponent;
  let fixture: ComponentFixture<IsEmptyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IsEmptyComponent]
    });
    fixture = TestBed.createComponent(IsEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
