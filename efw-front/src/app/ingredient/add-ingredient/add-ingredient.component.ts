import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Ingredient } from '../../models/ingredient.model';
import { IngredientService } from '.././ingredient.service';

@Component({
  templateUrl: './add-ingredient.component.html'
})
export class AddIngredientComponent {

  ingredient: Ingredient = new Ingredient();

  constructor(private router: Router, private ingredientService: IngredientService) {

  }

  createIngredient(): void {
    this.ingredientService.createIngredient(this.ingredient)
        .subscribe( data => {
          alert('Ingredient created successfully.');
        });

  }

}
