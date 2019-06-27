import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DishService } from '../dish.service';
import { Dish } from '../../models/dish.model';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  dishes: Dish[];

  constructor(private router: Router, private dishService: DishService) { }

  ngOnInit() {
    this.dishService.getDishes()
      .subscribe( data => {
        this.dishes = data;
      });
  }

  deleteDish(dish: Dish): void {
    this.dishService.deleteDish(dish)
      .subscribe( data => {
        this.dishes = this.dishes.filter(u => u !== dish);
      });
  }

}
