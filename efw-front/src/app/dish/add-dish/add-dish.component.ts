import { Component, OnInit } from '@angular/core';
import { DishService } from '../dish.service';
import { Dish } from '../../models/dish.model';
import { Router } from '@angular/router';
import { Ingredient } from '../../models/ingredient.model';
import { IngredientService } from '../../ingredient/ingredient.service';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {

  dish: Dish = new Dish();
  ingredients: Ingredient[];
  selectedIng: Ingredient;
  selectedIngredients: String[];

  constructor(private router: Router, private dishService: DishService, private ingredientService: IngredientService) {

  }

  ngOnInit() {
    this.ingredientService.getIngredients().subscribe(data => this.ingredients = data);
  }

  addIngredient(): void {
    if (this.selectedIng != null) {
      if (this.dish.ingredients == null) {
        this.dish.ingredients = [this.selectedIng];
        this.selectedIngredients = [this.selectedIng.name];
      } else if(this.dish.ingredients.indexOf(this.selectedIng) == -1) {
        this.dish.ingredients.push(this.selectedIng);
        this.selectedIngredients.push(this.selectedIng.name);
      } else {
        alert('That ingredient has already been selected');
      }
    } else {
      alert('You must select an ingredient first');
    }
  }

  clearIngredients(): void {
    this.dish.ingredients = [];
    this.selectedIngredients = [];
  }

  createDish(): void {
    this.dishService.createDish(this.dish)
        .subscribe( data => {
          alert('Dish created successfully.');
        });
  }

}
