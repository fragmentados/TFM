import { OK_CODE } from '../../models/service';
import { AddDishToMenu } from './../../models/menu/addDishToMenu.model';
// tslint:disable-next-line:max-line-length
import { CalendarWeekViewShoppingListComponent } from './../../calendar/calendar-week-view-shopping-list/calendar-week-view-shopping-list.component';
import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Menu } from '../../models/menu/menu.model';
import { addHours } from 'date-fns';
import { MenuDay } from '../../models/menu/menuDay.model';
import { CalendarEvent, CalendarEventTimesChangedEvent } from '../../calendar/common/calendar-common.module';
import {MatDialog} from '@angular/material/dialog';
import { Stat } from '../../models/nutrition/stat.model';
import { UserConfs } from '../../models/user/userConfs.model';
import { UserService } from '../../user.service';
import { Subject } from 'rxjs';
import { User } from '../../models/user/user.model';
import { MenuDish } from '../../models/menu/menuDish.model';
import { UpdateDishOnMenu } from '../../models/menu/updateDishOnMenu.model';

@Component({
  selector: 'app-menu-calendar',
  templateUrl: './menu-calendar.component.html',
  styleUrls: ['./menu-calendar.component.css']
})
export class MenuCalendarComponent implements OnInit {

  view = 'week';
  viewDate: Date = new Date();
  events: CalendarEvent[];
  menu: Menu;
  userConfs: UserConfs;
  mealsInWeek: string[];
  private updateStatsSubject: Subject<Menu> = new Subject<Menu>();
  currentUser: User;
  refresh: Subject<any> = new Subject();

  sendUpdateStatsEvent() {
    this.updateStatsSubject.next(this.menu);
  }

  constructor(private userService: UserService, private menuService: MenuService, public dialog: MatDialog) {
    this.currentUser = this.userService.currentUserValue;
  }

  ngOnInit() {
    this.initMenuAndEvents();
    this.userService.getUserConfs(this.currentUser.id).subscribe(data => {
      this.userConfs = data;
      this.mealsInWeek = this.userConfs.meals.map(meal => meal.name);
    });
  }

  initMenuAndEvents() {
    this.menuService.getUserMenu(this.currentUser.id, this.viewDate).subscribe(data => {
      if (data.id === null) {
        this.menu = null;
      } else {
        this.menu = data;
        this.events = this.initCalendarEventsWithDishes();
        this.sendUpdateStatsEvent();
      }
    });
  }

  initCalendarEventsWithDishes() {
    this.events = [];
    for (const day of this.menu.days) {
      const dayEvents = this.createCalendarEventsForDay(day);
      for (const event of dayEvents) {
          this.events.push(event);
      }
    }
    return this.events;
  }

  createCalendarEventsForDay(day: MenuDay) {
    const dayMeals: CalendarEvent[] = [];
    for (const meal of day.meals) {
      dayMeals.push(this.createEventFromMenuDish(meal, meal.date));
    }
    return dayMeals;
  }

  createEventFromMenuDish(menuDish: MenuDish, eventDate: string): CalendarEvent {
    const mealDate: Date = new Date(eventDate);
    return {
      start: mealDate,
      end: addHours(mealDate, 1),
      title: menuDish.name,
      draggable: true
    };
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
      if (data.errorCode === 0) {
        this.events = [];
        this.menu.days = [];
        this.menu.stats  = [];
        this.sendUpdateStatsEvent();
      }
    });
  }

  randomMenu() {
    this.menuService.randomGenerateMenu(this.menu.id, this.currentUser.id).subscribe(data => {
      this.menu.days = data.days;
      this.menu.stats = data.stats;
      this.sendUpdateStatsEvent();
      this.initCalendarEventsWithDishes();
    });
  }

  validMenu() {
    this.menuService.generateValidMenu(this.menu.id, this.currentUser.id).subscribe(data => {
      this.menu.days = data.days;
      this.menu.stats = data.stats;
      this.sendUpdateStatsEvent();
      this.initCalendarEventsWithDishes();
    });
  }

  createMenu() {
    this.menuService.createMenu(this.currentUser.id, this.viewDate).subscribe(data => {
      this.initMenuAndEvents();
    });
  }

  printMenu() {
    const mywindow = window.open('', 'PRINT', 'height=400,width=600');

    mywindow.document.write('<html><head><title>Menu Calendar</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write('<h1>Menu Calendar</h1>');
    mywindow.document.write(document.getElementById('calendar root div').innerHTML);
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.close();

      return true;
  }

  updateMenuStatsWithDishStats(dishStats: Stat[]) {
    if (this.menu.stats == null) {
      this.menu.stats = [];
    }
    for (const dishStat of dishStats) {
      const menuStat: Stat = this.menu.stats.find(element => element.name === dishStat.name);
      if (menuStat == null) {
        this.menu.stats.push(dishStat);
      } else {
        this.menu.stats = this.menu.stats.filter(element => element.name !== menuStat.name);
        this.menu.stats.push(new Stat(menuStat.name, (parseFloat(menuStat.value) + parseFloat(dishStat.value)).toString()));
      }
    }
    this.menuService.getUserMenu(this.currentUser.id, this.viewDate).subscribe(data => {
      this.menu = data;
      this.sendUpdateStatsEvent();
    });
  }

  updateMenuStatsWithoutDishStats(dish: MenuDish) {
    for (const dishStat of dish.stats) {
      const menuStat: Stat = this.menu.stats.find(element => element.name === dishStat.name);
      this.menu.stats = this.menu.stats.filter(element => element.name !== menuStat.name);
      if (parseFloat(menuStat.value) - parseFloat(dishStat.value) !== 0) {
        this.menu.stats.push(new Stat(menuStat.name, (parseFloat(menuStat.value) - parseFloat(dishStat.value)).toString()));
      }
    }
    this.sendUpdateStatsEvent();
  }

  handleClickEvent(clickEvent) {
    const dishSelected:  MenuDish = this.getDishIdFromUnformattedDate(clickEvent.event.start);
    const addDishToMenu: AddDishToMenu = new AddDishToMenu();
    addDishToMenu.dishId = dishSelected.id;
    if (clickEvent.shiftKey) {
      this.addDishToFirstSpot(dishSelected, addDishToMenu);
    } else {
      this.deleteDishFromCalendar(clickEvent.event.start, dishSelected, addDishToMenu);
    }
  }

  addDishToFirstSpot(dishSelected: MenuDish, addDishToMenu: AddDishToMenu) {
    this.menuService.addDishToFirstValidSpotMenu(this.currentUser.id, addDishToMenu).subscribe(data => {
      if (data.date) {
        this.updateMenuStatsWithDishStats(dishSelected.stats);
        this.events.push(this.createEventFromMenuDish(dishSelected, data.date));
        this.refresh.next();
      }
    });
  }

  deleteDishFromCalendar(startEvent: Date, dishSelected: MenuDish, addDishToMenu: AddDishToMenu) {
    const dateWithHour: string = this.menuService.formatDateWithHour(startEvent);
    addDishToMenu.date = dateWithHour;
    this.menuService.removeDishFromMenu(this.menu.id, addDishToMenu).subscribe(data => {
      if (data.errorCode === OK_CODE) {
        this.updateMenuStatsWithoutDishStats(dishSelected);
      }
    });
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    this.menuService.updateDishDateOnMenu(this.menu.id,
      new UpdateDishOnMenu(this.getDishIdFromUnformattedDate(event.start).id,
      this.menuService.formatDateWithHour(event.start),
      this.menuService.formatDateWithHour((newStart)))).subscribe(data => this.menu = data);
      event.start = newStart;
      event.end = newEnd;
      this.refresh.next();
  }

  getDishIdFromUnformattedDate(start): MenuDish {
    const date: string = this.menuService.formatDate(start);
    const dateWithHour: string = this.menuService.formatDateWithHour(start);
    return this.menu.days.filter(day => day.date === date)[0].meals.filter(meal => meal.date === dateWithHour)[0];
  }

  updateMenuWithNewMenu() {
    this.initMenuAndEvents();
  }

}
