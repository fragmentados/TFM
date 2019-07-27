import { UserService } from '../../user.service';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models/ingredient/ingredient.model';
import { IngredientService } from '.././ingredient.service';
import { User } from '../../models/user/user.model';


@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styles: []
})
export class IngredientComponent implements OnInit {

  ingredients: Ingredient[];
  currentUser: User;

  constructor(private userService: UserService, private ingredientService: IngredientService) {
    this.currentUser = this.userService.currentUserValue;
  }

  ngOnInit() {
    this.ingredientService.getUserIngredients(this.currentUser.id)
      .subscribe( data => {
        this.ingredients = data;
      });
  }

  deleteIngredient(ingredient: Ingredient): void {
    this.ingredientService.deleteIngredient(ingredient)
      .subscribe( data => {
        this.ingredients = this.ingredients.filter(u => u !== ingredient);
      });
  }

}


