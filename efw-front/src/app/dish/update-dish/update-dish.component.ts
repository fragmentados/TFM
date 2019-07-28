import { Component, OnInit } from '@angular/core';
import { AddDish } from '../../models/dish/addDish.model';
import { Ingredient } from '../../models/ingredient/ingredient.model';
import { Stat } from '../../models/nutrition/stat.model';
import { User } from '../../models/user/user.model';
import { DishService } from '../dish.service';
import { IngredientService } from '../../ingredient/ingredient.service';
import { UserService } from '../../user.service';
import { AddDishIngredient } from '../../models/dish/addDishIngredient.model';
import { ActivatedRoute } from '@angular/router';
import { Dish } from '../../models/dish/dish.model';

class IngredientNameAndQuantity {
  constructor(ing, quantity) {
    this.ingredient = ing;
    this.quantity = quantity;
  }
  ingredient: Ingredient;
  quantity: number;
}

@Component({
  selector: 'app-update-dish',
  templateUrl: './update-dish.component.html',
  styleUrls: ['./update-dish.component.css']
})
export class UpdateDishComponent implements OnInit {

  dish: AddDish = new AddDish();
  ingredients: Ingredient[];
  selectedIngredients: IngredientNameAndQuantity[];
  dishStats: Stat[];
  selectedIng: Ingredient;
  ingredientQuantity: number;
  currentUser: User;
  dishId: number;

  constructor(private route: ActivatedRoute, private dishService: DishService,
    private ingredientService: IngredientService, private userService: UserService) {
    this.currentUser = this.userService.currentUserValue;
    this.route.params.subscribe(params => this.dishId = params['id']);
  }

  ngOnInit() {
    this.dishService.getDish(this.dishId).subscribe(data => this.dish = this.dishToAddDish(data));
    this.ingredientService.getUserIngredients(this.currentUser.id).subscribe(data => this.ingredients = data);
  }

  dishToAddDish(dish: Dish): AddDish {
    const updateDish: AddDish = new AddDish();
    updateDish.name = dish.name;
    updateDish.ingredients = [];
    this.selectedIngredients = [];
    dish.ingredients.forEach(ingredient => {
      updateDish.ingredients.push(new AddDishIngredient(ingredient.ingredient.id, ingredient.quantity));
      this.selectedIngredients.push(new IngredientNameAndQuantity(ingredient.ingredient, ingredient.quantity));
    });
    this.dishStats = dish.stats;
    return updateDish;
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

  addIngredient() {
    if (this.selectedIng != null) {
      if (this.dish.ingredients == null) {
        this.dish.ingredients = [new AddDishIngredient(this.selectedIng.id, this.ingredientQuantity)];
        this.selectedIngredients = [new IngredientNameAndQuantity(this.selectedIng, this.ingredientQuantity)];
        this.updateDishStatsWithIngredientStats(this.selectedIng);
      } else if (this.dish.ingredients.filter(ing => ing.id === this.selectedIng.id).length === 0) {
        this.dish.ingredients.push(new AddDishIngredient(this.selectedIng.id, this.ingredientQuantity));
        this.selectedIngredients.push(new IngredientNameAndQuantity(this.selectedIng, this.ingredientQuantity));
        this.updateDishStatsWithIngredientStats(this.selectedIng);
      } else {
        alert('That ingredient has already been selected');
      }
    } else {
      alert('You must select an ingredient first');
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

  clearIngredients(): void {
    this.dish.ingredients = [];
    this.selectedIngredients = [];
    this.dishStats = null;
    this.ingredientQuantity = 0;
  }

  updateDish(): void {
    this.dishService.updateDish(this.dishId, this.dish)
        .subscribe( data => {
          alert('Dish ' + this.dish.name + ' updated successfully.');
        });
  }
}
