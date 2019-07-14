// tslint:disable-next-line:max-line-length
import { CalendarWeekViewShoppingListComponent } from './../../calendar/calendar-week-view-shopping-list/calendar-week-view-shopping-list.component';
import { LOGGED_IN_USER } from './../../models/service';
import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Menu } from '../../models/menu/menu.model';
import { addHours, startOfDay } from 'date-fns';
import { MenuDay } from '../../models/menu/menuDay.model';
import { CalendarEvent } from '../../calendar/common/calendar-common.module';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-menu-calendar',
  templateUrl: './menu-calendar.component.html',
  styleUrls: ['./menu-calendar.component.css']
})
export class MenuCalendarComponent implements OnInit {

  viewDate: Date = new Date();
  events: CalendarEvent[];
  menu: Menu;

  constructor(private menuService: MenuService, public dialog: MatDialog) { }

  ngOnInit() {
    this.initMenuAndEvents();
  }

  initMenuAndEvents() {
    this.menuService.getUserMenu(LOGGED_IN_USER, this.viewDate).subscribe(data => {
      this.menu = data;
      const events = this.initCalendarEventsWithDishes();
      this.events = events;
      console.log(events);
    });
  }

  initCalendarEventsWithDishes() {
    for (const day of this.menu.days) {
      const dayEvents = this.createCalendarEventsForDay(day);
      for (const event of dayEvents) {
        if (!this.events) {
          this.events = [event];
        } else {
          this.events.push(event);
        }
      }
    }
    return this.events;
  }

  createCalendarEventsForDay(day: MenuDay) {
    const dayMeals: CalendarEvent[] = [];
    let offset = 0;
    for (const meal of day.meals) {
      const dayDate: Date = new Date(day.date);
      dayMeals.push({
        start: addHours(dayDate, offset),
        end: addHours(dayDate, offset + 1),
        title: meal.name
      });
      offset++;
    }
    return dayMeals;
  }

  generateShoppingList() {
    this.menuService.getShoppingList(this.menu.id).subscribe(data => {
      const dialogRef = this.dialog.open(CalendarWeekViewShoppingListComponent, {
        width: '600px',
        data: data
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog closed: ${result}`);
      });
    });
  }

  clearMenu() {
    this.menuService.clearMenu(this.menu.id).subscribe(data => {
      if(data.errorCode === 0) {
        this.events = [];
      }
    })
  }

  createMenu() {
    this.menuService.createMenu(LOGGED_IN_USER, this.viewDate).subscribe(data => {
      this.initMenuAndEvents();
    });
  }

}
