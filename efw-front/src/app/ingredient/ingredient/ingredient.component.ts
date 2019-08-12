import { FoodCategory } from './../../models/ingredient/foodCategory.model';
import { UserService } from '../../user.service';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../models/ingredient/ingredient.model';
import { IngredientService } from '.././ingredient.service';
import { User } from '../../models/user/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styles: []
})
export class IngredientComponent implements OnInit {

  ingredients: Ingredient[];
  bannedCategories: FoodCategory[];
  currentUser: User;

  constructor(private router: Router, private userService: UserService, private ingredientService: IngredientService) {
    this.currentUser = this.userService.currentUserValue;
  }

  ngOnInit() {
    this.ingredientService.getUserIngredients(this.currentUser.id)
      .subscribe( data => {
        this.ingredients = data;
      });
      this.userService.getUserConfs(this.currentUser.id).subscribe(data => {
        this.bannedCategories = data.bannedCategories;
      });
  }

  updateIngredient(ingredient: Ingredient): void {
    this.router.navigate(['/ingredients/updateIngredient', ingredient.id]);
  }

  deleteIngredient(ingredient: Ingredient): void {
    this.ingredientService.deleteIngredient(ingredient)
      .subscribe( data => {
        this.ingredients = this.ingredients.filter(u => u !== ingredient);
      });
  }

  isBanned(ingredient: Ingredient) {
    return this.bannedCategories.filter(bc => bc.id === ingredient.category.id).length > 0;
  }

}


