import { UserService } from '../user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngredientRoutingModule } from './ingredient-routing.module';
import { IngredientComponent } from './ingredient/ingredient.component';
import { AddIngredientComponent } from './add-ingredient/add-ingredient.component';
import { FormsModule } from '@angular/forms';
import { IngredientService } from './ingredient.service';
import { UpdateIngredientComponent } from './update-ingredient/update-ingredient.component';

@NgModule({
  declarations: [IngredientComponent, AddIngredientComponent, UpdateIngredientComponent],
  imports: [
    CommonModule,
    FormsModule,
    IngredientRoutingModule
  ],
  exports: [IngredientComponent],
  providers: [IngredientService, UserService]
})
export class IngredientModule { }
