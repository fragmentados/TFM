import { MenuService } from './../../menu/menu.service';
import { ApplicationStateService } from './../../application-state.service';
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
  isMobile = true;
  isTablet = false;

  @Input()
  menu: Menu;

  @Input()
  userConfs: UserConfs;

  @Input()
  events: Observable<void>;

  constructor(private appStateService: ApplicationStateService, private menuService: MenuService) {
    this.isMobile = this.appStateService.getIsMobileResolution();
    this.isTablet = this.appStateService.getIsTabletResolution();
  }

  ngOnInit() {
    if (this.isMobile || this.isTablet) {
      this.switchDaily();
    } else {
      this.switchWeekly();
    }
    this.events.subscribe((menuReceived) => this.updateCurrentSelectedStats(menuReceived));
  }

  switchDaily() {
    this.viewageType = 'DAILY';
    this.selectedDay = this.menuService.formatDate(new Date());
    this.updateSelectedDailyStats(null);
  }

  switchToCurrentDay() {
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

  getMinDate() {
    if (this.isTablet) {
      return this.menuService.formatDate(new Date());
    } else {
      return this.menu.startDate;
    }
  }

  getMaxMenuDate() {
    if (this.isTablet) {
      const currentDate = this.menuService.formatDate(new Date());
      const indexOfCurrentDay = this.menu.days.indexOf(this.menu.days.filter(d => d.date === currentDate)[0]);
      return this.menu.days[indexOfCurrentDay + 2].date;
    }
    return this.menu.days[this.menu.days.length - 1].date;
  }

}
