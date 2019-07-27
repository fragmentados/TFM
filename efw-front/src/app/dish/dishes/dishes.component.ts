import { Component, OnInit } from '@angular/core';
import { DishService } from '../dish.service';
import { Dish } from '../../models/dish/dish.model';
import { UserService } from '../../user.service';
import { User } from '../../models/user/user.model';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  dishes: Dish[];
  currentUser: User;

  constructor(private userService: UserService, private dishService: DishService) {
    this.currentUser = this.userService.currentUserValue;
  }

  ngOnInit() {
    this.dishService.getUserDishes(this.currentUser.id)
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
