import { AddDishToMenu } from './../../models/menu/addDishToMenu.model';
import { Component, OnInit } from '@angular/core';
import { DishRestService } from '../dishRest.service';
import { Dish } from '../../models/dish/dish.model';
import { UserService } from '../../user.service';
import { User } from '../../models/user/user.model';
import { Router } from '@angular/router';
import { MenuService } from '../../menu/menu.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  dishes: Dish[];
  currentUser: User;

  constructor(private router: Router, private userService: UserService,
    private dishService: DishRestService, private menuService: MenuService) {
    this.currentUser = this.userService.currentUserValue;
  }

  ngOnInit() {
    this.dishService.getUserDishes(this.currentUser.id)
      .subscribe( data => {
        this.dishes = data;
      });
  }

  updateDish(dish: Dish): void {
    this.router.navigate(['/dishes/updateDish', dish.id]);
  }

  deleteDish(dish: Dish): void {
    this.dishService.deleteDish(dish)
      .subscribe( data => {
        this.dishes = this.dishes.filter(u => u !== dish);
      });
  }

  addToMenu(dish: Dish): void {
    const addToMenu: AddDishToMenu = new AddDishToMenu();
    addToMenu.dishId = dish.id;
    this.menuService.addDishToFirstValidSpotMenu(this.currentUser.id, addToMenu).subscribe(data => {
      if (data.errorCode === 0) {
        alert('Dish added correctly');
      } else {
        alert('There are no valid spots for that dish');
      }
    });
  }

}
