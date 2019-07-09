import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { MenuService } from '../menu.service';
import { Menu } from '../../models/menu/menu.model';
import { addDays, addHours, startOfDay } from 'date-fns';
import { MenuDish } from '../../models/menu/menuDish.model';

@Component({
  selector: 'app-menu-calendar',
  templateUrl: './menu-calendar.component.html',
  styleUrls: ['./menu-calendar.component.css']
})
export class MenuCalendarComponent {

  viewDate: Date = new Date();
  events: CalendarEvent[];
  menu: Menu;

  constructor(private menuService: MenuService) { }

  /*initCalendarEventsWithDishes() {
    let day = 0;
    for(const dish of this.menu.dishes) {
      const event: CalendarEvent = this.createCalendarEvent(dish, day);
      if (this.events == null) {
        this.events = [event];
      } else {
        this.events.push(event);
      }
      day++;
    }
  }

  createCalendarEvent(dish: MenuDish, day: number) {
    return {
      start: addHours(startOfDay(addDays(new Date(), day)), 9),
      end: addHours(startOfDay(addDays(new Date(), day)), 10),
      title: dish.name
    }
  }

  dayHeaderClicked({ event }: { event: CalendarEvent }): void {
    alert('Has clickado en dia');
  }

  hourClicked({ event }: { event: CalendarEvent }): void {
    alert('Has clickado en hora');
  }*/

}
