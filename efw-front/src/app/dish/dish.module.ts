import { NutritionModule } from './../nutrition/nutrition.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDishComponent } from './add-dish/add-dish.component';
import { DishesComponent } from './dishes/dishes.component';
import { FormsModule } from '@angular/forms';
import { DishRoutingModule } from './dish-routing.module';
import { DishService } from './dish.service';
import { IngredientService } from '../ingredient/ingredient.service';
import { UpdateDishComponent } from './update-dish/update-dish.component';

@NgModule({
  declarations: [AddDishComponent, DishesComponent, UpdateDishComponent],
  imports: [
    CommonModule,
    FormsModule,
    DishRoutingModule,
    NutritionModule
  ],
  exports: [DishesComponent],
  providers: [DishService, IngredientService]
})
export class DishModule { }
