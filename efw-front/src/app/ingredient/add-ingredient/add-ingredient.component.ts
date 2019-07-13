import { AddIngredient } from '../../models/ingredient/addIngredient.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IngredientService } from '.././ingredient.service';
import { LOGGED_IN_USER } from '../../models/service';

@Component({
  templateUrl: './add-ingredient.component.html'
})
export class AddIngredientComponent {

  ingredient: AddIngredient = new AddIngredient();

  constructor(private router: Router, private ingredientService: IngredientService) {

  }

  createIngredient(): void {
    this.ingredient.userId = LOGGED_IN_USER;
    this.ingredientService.createIngredient(this.ingredient)
        .subscribe( data => {
          alert('Ingredient created successfully.');
        });

  }

}
