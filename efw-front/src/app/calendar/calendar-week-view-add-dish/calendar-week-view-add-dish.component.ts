import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DishService } from '../../dish/dish.service';
import { Dish } from '../../models/dish/dish.model';
import { LOGGED_IN_USER } from '../../models/service';

@Component({
  selector: 'app-calendar-week-view-add-dish',
  templateUrl: './calendar-week-view-add-dish.component.html',
  styleUrls: ['./calendar-week-view-add-dish.component.css']
})
export class CalendarWeekViewAddDishComponent implements OnInit {

  dishes: Dish[];
  selectedDish: Dish;

  constructor(private dishService: DishService, public dialogRef: MatDialogRef<CalendarWeekViewAddDishComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Date) {}

  ngOnInit() {
    this.dishService.getUserDishes(LOGGED_IN_USER).subscribe(data => {
      this.dishes = data;
    });
  }

}
