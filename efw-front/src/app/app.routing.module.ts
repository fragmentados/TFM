import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import {AddUserComponent} from './user/add-user.component';
import { IngredientComponent } from './ingredient/ingredient/ingredient.component';
import { AddIngredientComponent } from './ingredient/add-ingredient/add-ingredient.component';

const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'addUser', component: AddUserComponent },
  { path: 'ingredients', loadChildren: './ingredient/ingredient.module#IngredientModule' },
  { path: 'dishes', loadChildren: './dish/dish.module#DishModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
