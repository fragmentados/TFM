import { LOGGED_IN_USER } from './../../models/service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Ingredient } from '../../models/ingredient/ingredient.model';
import { IngredientService } from '.././ingredient.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styles: []
})
export class IngredientComponent implements OnInit {

  ingredients: Ingredient[];

  constructor(private router: Router, private ingredientService: IngredientService) {

  }

  ngOnInit() {
    this.ingredientService.getUserIngredients(LOGGED_IN_USER)
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


