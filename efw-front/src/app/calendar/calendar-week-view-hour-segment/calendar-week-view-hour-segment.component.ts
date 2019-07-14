import { Component, Input } from '@angular/core';
import { WeekViewHourColumn } from '../common/util';
import { MenuService } from '../../menu/menu.service';
import { MatDialog } from '@angular/material/dialog';
import { CalendarWeekViewAddDishComponent } from '../calendar-week-view-add-dish/calendar-week-view-add-dish.component';
import { AddDishToMenu } from '../../models/menu/addDishToMenu.model';
import { startOfDay, addHours } from 'date-fns';

@Component({
  selector: 'app-calendar-week-view-hour-segment',
  templateUrl: './calendar-week-view-hour-segment.component.html',
  styleUrls: ['../calendar-week-view.scss']
})
export class CalendarWeekViewHourSegmentComponent {

  constructor(private menuService: MenuService, public dialog: MatDialog) { }

  @Input() segment: WeekViewHourColumn;

  @Input() segmentHeight: number;

  @Input() segmentWidth: number;

  @Input() isMealLabel: boolean;

  @Input() locale: string;

  addDishPopup() {
    const dialogRef = this.dialog.open(CalendarWeekViewAddDishComponent, {
      width: '600px',
      data: this.segment.date
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      const addDishToMenu: AddDishToMenu = new AddDishToMenu();
      addDishToMenu.date = this.formatDate(this.segment.date);
      addDishToMenu.dishId = result.id;
      this.menuService.addDishToMenu(2, addDishToMenu).subscribe(data => {
        console.log(`Dish added to menu: ${data}`);
      });
    });
  }

  private formatDate(startDate: Date) {
    return startDate.getFullYear() + '-' +
           ('0' + (startDate.getMonth() + 1)).slice(-2) + '-' +
           ('0' + startDate.getDate()).slice(-2);
  }
}
