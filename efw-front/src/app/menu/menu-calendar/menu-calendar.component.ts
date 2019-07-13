import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Menu } from '../../models/menu/menu.model';
import { addHours, startOfDay } from 'date-fns';
import { MenuDay } from '../../models/menu/menuDay.model';
import { CalendarEvent } from '../../calendar/common/calendar-common.module';

@Component({
  selector: 'app-menu-calendar',
  templateUrl: './menu-calendar.component.html',
  styleUrls: ['./menu-calendar.component.css']
})
export class MenuCalendarComponent implements OnInit {

  viewDate: Date = new Date();
  events: CalendarEvent[];
  menu: Menu;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.getUserMenu(1, this.viewDate).subscribe(data => {
      this.menu = data[0];
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
      dayMeals.push({
        start: addHours(startOfDay(new Date(day.date)), offset),
        end: addHours(startOfDay(new Date(day.date)), offset + 1),
        title: meal.name
      });
      offset++;
    }
    return dayMeals;
  }

}
