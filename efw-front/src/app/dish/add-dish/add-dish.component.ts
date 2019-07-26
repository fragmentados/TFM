import { LOGGED_IN_USER } from './../../models/service';
import { Component, OnInit } from '@angular/core';
import { DishService } from '../dish.service';
import { AddDish } from '../../models/dish/addDish.model';
import { Router } from '@angular/router';
import { Ingredient } from '../../models/ingredient/ingredient.model';
import { IngredientService } from '../../ingredient/ingredient.service';
import { Stat } from '../../models/nutrition/stat.model';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {

  dish: AddDish = new AddDish();
  ingredients: Ingredient[];
  selectedIngredients: Ingredient[];
  dishStats: Stat[];
  selectedIng: Ingredient;

  constructor(private router: Router, private dishService: DishService, private ingredientService: IngredientService) {}

  ngOnInit() {
    this.ingredientService.getUserIngredients(LOGGED_IN_USER).subscribe(data => this.ingredients = data);
  }

  selectedIngredientsNames(): String[] {
    return this.selectedIngredients.map(elem => elem.name);
  }

  addIngredient() {
    if (this.selectedIng != null) {
      if (this.dish.ingredients == null) {
        this.dish.ingredients = [this.selectedIng.id];
        this.selectedIngredients = [this.selectedIng];
        this.updateDishStatsWithIngredientStats(this.selectedIng);
      } else if (this.dish.ingredients.indexOf(this.selectedIng.id) === -1) {
        this.dish.ingredients.push(this.selectedIng.id);
        this.selectedIngredients.push(this.selectedIng);
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
        this.dishStats.push(ingredientStat);
      } else {
        this.dishStats = this.dishStats.filter(element => element.name !== dishStat.name);
        this.dishStats.push(new Stat(dishStat.name, (parseInt(dishStat.value) + parseInt(ingredientStat.value)).toString()));
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
  }

  createDish(): void {
    this.dish.userId = LOGGED_IN_USER;
    this.dishService.createDish(this.dish)
        .subscribe( data => {
          this.clearForm();
          alert('Dish ' + this.dish.name + ' created successfully.');
        });
  }

}
