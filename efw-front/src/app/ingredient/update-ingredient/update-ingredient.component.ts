import { UpdateIngredient } from './../../models/ingredient/updateIngredient.model';
import { Ingredient } from './../../models/ingredient/ingredient.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IngredientService } from '.././ingredient.service';
import { FoodCategory } from '../../models/ingredient/foodCategory.model';

@Component({
  templateUrl: './update-ingredient.component.html',
  styleUrls: ['./update-ingredient.component.css']
})
export class UpdateIngredientComponent implements OnInit {

  ingredient: UpdateIngredient = new UpdateIngredient();
  categories: FoodCategory[];
  ingredientId: number;

  constructor(private route: ActivatedRoute, private ingredientService: IngredientService) {
    this.route.params.subscribe(params => this.ingredientId = params['id']);
  }

  ngOnInit() {
    this.ingredientService.foodCategories().subscribe(data => this.categories = data);
    this.ingredientService.getIngredient(this.ingredientId)
      .subscribe( data => this.ingredient = this.ingredientToUpdateIngredient(data));
  }

  ingredientToUpdateIngredient(ingredient: Ingredient): UpdateIngredient {
    const updateIngredient: UpdateIngredient = new UpdateIngredient();
    updateIngredient.name = ingredient.name;
    updateIngredient.calories = ingredient.stats.filter(stat => stat.name === 'Calories')[0].value;
    updateIngredient.proteins = ingredient.stats.filter(stat => stat.name === 'Proteins')[0].value;
    updateIngredient.fats = ingredient.stats.filter(stat => stat.name === 'Fats')[0].value;
    updateIngredient.carbohydrates = ingredient.stats.filter(stat => stat.name === 'Carbohydrates')[0].value;
    updateIngredient.categoryId = ingredient.category.id;
    return updateIngredient;
  }

  updateIngredient(): void {
    this.ingredientService.updateIngredient(this.ingredientId, this.ingredient)
      .subscribe( data => {
        alert('Ingredient updated successfully.');
      });
  }

}
