import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarWeekViewStatsComponent } from './calendar-week-view-stats.component';

describe('CalendarWeekViewStatsComponent', () => {
  let component: CalendarWeekViewStatsComponent;
  let fixture: ComponentFixture<CalendarWeekViewStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarWeekViewStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarWeekViewStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
