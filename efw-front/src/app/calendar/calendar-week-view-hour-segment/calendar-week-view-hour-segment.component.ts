import { Component, Input } from '@angular/core';
import { WeekViewHourColumn } from '../common/util';

@Component({
  selector: 'app-calendar-week-view-hour-segment',
  templateUrl: './calendar-week-view-hour-segment.component.html',
  styleUrls: ['../calendar-week-view.scss']
})
export class CalendarWeekViewHourSegmentComponent {
  @Input() segment: WeekViewHourColumn;

  @Input() segmentHeight: number;

  @Input() segmentWidth: number;

  @Input() isMealLabel: boolean;

  @Input() locale: string;
}
