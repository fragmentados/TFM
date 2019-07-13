import { Component, OnInit, Input } from '@angular/core';
import { MenuStat } from '../../models/menu/menuStat.model';

@Component({
  selector: 'app-calendar-week-view-stats',
  templateUrl: './calendar-week-view-stats.component.html',
  styleUrls: ['./calendar-week-view-stats.component.css']
})
export class CalendarWeekViewStatsComponent {

  @Input() stats: MenuStat[];
}
