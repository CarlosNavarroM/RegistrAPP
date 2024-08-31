import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AttendanceReportsPage } from './attendance-reports.page';

describe('AttendanceReportsPage', () => {
  let component: AttendanceReportsPage;
  let fixture: ComponentFixture<AttendanceReportsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceReportsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
