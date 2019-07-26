import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../../models/menu/menu.model';
import { UserConfs } from '../../models/user/userConfs.model';
import { Stat } from '../../models/nutrition/stat.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-stats-dashboard',
  templateUrl: './view-stats-dashboard.component.html',
  styleUrls: ['./view-stats-dashboard.component.css']
})
export class ViewStatsDashboardComponent implements OnInit {

  viewageType: string;
  selectedStats: Stat[];
  selectedDay: string;

  @Input()
  menu: Menu;

  @Input()
  userConfs: UserConfs;

  @Input()
  events: Observable<void>;

  constructor() { }

  ngOnInit() {
    this.switchWeekly();
    this.events.subscribe((menuReceived) => this.updateCurrentSelectedStats(menuReceived));
  }

  switchDaily() {
    this.viewageType = 'DAILY';
    this.selectedStats = null;
  }

  switchWeekly() {
    this.viewageType = 'WEEKLY';
    this.selectedStats = this.menu.stats;
  }

  updateCurrentSelectedStats(menuReceived) {
    this.menu = menuReceived;
    if (this.viewageType === 'WEEKLY') {
      this.selectedStats = this.menu.stats;
    } else if (this.viewageType === 'DAILY') {
      this.updateSelectedDailyStats(null);
    }
  }

  updateSelectedDailyStats(event) {
    const selectedDayFromMenu = this.menu.days.filter(day => day.date.startsWith(this.selectedDay))[0];
    if (selectedDayFromMenu != null) {
      this.selectedStats = selectedDayFromMenu.stats;
    } else {
      this.selectedStats = [];
    }
  }

  getMaxMenuDate() {
    return this.menu.days[this.menu.days.length - 1].date;
  }

}
