import { Component, OnInit } from '@angular/core';
import { DishService } from '../dish.service';
import { AddDish } from '../../models/dish/addDish.model';
import { Ingredient } from '../../models/ingredient/ingredient.model';
import { IngredientService } from '../../ingredient/ingredient.service';
import { Stat } from '../../models/nutrition/stat.model';
import { User } from '../../models/user/user.model';
import { UserService } from '../../user.service';
import { AddDishIngredient } from '../../models/dish/addDishIngredient.model';


class IngredientNameAndQuantity {
    constructor(ing, quantity) {
      this.ingredient = ing;
      this.quantity = quantity;
    }
    ingredient: Ingredient;
    quantity: number;
}

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {

  dish: AddDish = new AddDish();
  ingredients: Ingredient[];
  selectedIngredients: IngredientNameAndQuantity[] = [];
  dishStats: Stat[];
  selectedIng: Ingredient;
  ingredientQuantity: number;
  currentUser: User;

  constructor(private dishService: DishService, private ingredientService: IngredientService, private userService: UserService) {
    this.currentUser = this.userService.currentUserValue;
  }

  ngOnInit() {
    this.ingredientService.getUserIngredients(this.currentUser.id).subscribe(data => this.ingredients = data);
    this.dish.ingredients = [];
  }

  addIngredient() {
    if (this.selectedIng != null) {
      if (this.dish.ingredients.filter(ing => ing.id === this.selectedIng.id).length === 0) {
        this.dish.ingredients.push(new AddDishIngredient(this.selectedIng.id, this.ingredientQuantity));
        this.selectedIngredients.push(new IngredientNameAndQuantity(this.selectedIng, this.ingredientQuantity));
        this.updateDishStatsWithIngredientStats(this.selectedIng);
        this.autoFillDishName(this.selectedIng.name);
      } else {
        alert('That ingredient has already been selected');
      }
    } else {
      alert('You must select an ingredient first');
    }
  }

  removeIngredient(ingredient: IngredientNameAndQuantity) {
    this.dish.ingredients = this.dish.ingredients.filter(ing => ing.id !== ingredient.ingredient.id);
    this.selectedIngredients = this.selectedIngredients.filter(ing => ing !== ingredient);
    this.updateDishStatsWithoutIngredientStats(ingredient);
  }


  updateDishStatsWithoutIngredientStats(ingredient: IngredientNameAndQuantity) {
    if (this.dishStats == null) {
      this.dishStats = [];
    }
    for (const ingredientStat of ingredient.ingredient.stats) {
      const dishStat: Stat = this.dishStats.find(element => element.name === ingredientStat.name);
      this.dishStats = this.dishStats.filter(element => element.name !== dishStat.name);
      this.dishStats.push(new Stat(dishStat.name, (parseFloat(dishStat.value) -
          (parseFloat(ingredientStat.value) * ingredient.quantity)).toString()));
    }
  }

  updateDishStatsWithIngredientStats(ingredient: Ingredient) {
    if (this.dishStats == null) {
      this.dishStats = [];
    }
    for (const ingredientStat of ingredient.stats) {
      const dishStat: Stat = this.dishStats.find(element => element.name === ingredientStat.name);
      if (dishStat == null) {
        this.dishStats.push(new Stat(ingredientStat.name, (parseFloat(ingredientStat.value) * this.ingredientQuantity).toString()));
      } else {
        this.dishStats = this.dishStats.filter(element => element.name !== dishStat.name);
        this.dishStats.push(new Stat(dishStat.name, (parseFloat(dishStat.value) +
          (parseFloat(ingredientStat.value) * this.ingredientQuantity)).toString()));
      }
    }
  }

  clearForm(): void {
    this.dish.name = '';
    this.selectedIng = null;
    this.clearIngredients();
  }

  clearIngredients(): void {
    this.dish.ingredients = [];
    this.selectedIngredients = [];
    this.dishStats = null;
    this.ingredientQuantity = 0;
  }

  createDish(): void {
    this.dish.userId = this.currentUser.id;
    this.dishService.createDish(this.dish)
        .subscribe( data => {
          this.clearForm();
          alert('Dish ' + this.dish.name + ' created successfully.');
        });
  }

  autoFillDishName(ingrName: string) {
    if (this.dish.name == null || this.dish.name === '') {
      this.dish.name = ingrName;
    } else {
      if (this.dish.name.includes('con')) {
        this.dish.name = this.dish.name + ' y ' + ingrName;
      } else {
        this.dish.name = this.dish.name + ' con ' + ingrName;
      }
    }
  }

}
