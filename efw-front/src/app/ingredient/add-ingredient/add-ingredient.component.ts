import { UserService } from '../../user.service';
import { AddIngredient } from '../../models/ingredient/addIngredient.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IngredientService } from '.././ingredient.service';
import { User } from '../../models/user/user.model';

@Component({
  templateUrl: './add-ingredient.component.html',
  styleUrls: ['./add-ingredient.component.css']
})
export class AddIngredientComponent {

  ingredient: AddIngredient = new AddIngredient();
  currentUser: User;

  constructor(private userService: UserService, private router: Router, private ingredientService: IngredientService) {
    this.currentUser = this.userService.currentUserValue;
  }

  clearForm() {
    this.ingredient.name = '';
    this.ingredient.calories = null;
    this.ingredient.carbohydrates = null;
    this.ingredient.proteins = null;
    this.ingredient.fats = null;
  }

  createIngredient(): void {
    this.ingredient.userId = this.currentUser.id;
    this.ingredientService.createIngredient(this.ingredient)
        .subscribe( data => {
          this.clearForm();
          alert('Ingredient created successfully.');
        });

  }

}
