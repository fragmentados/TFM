import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import {AddUserComponent} from './user/add-user.component';

const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'addUser', component: AddUserComponent },
  { path: 'ingredients', loadChildren: './ingredient/ingredient.module#IngredientModule' },
  { path: 'dishes', loadChildren: './dish/dish.module#DishModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuModule' },
  { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarModule' }
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
