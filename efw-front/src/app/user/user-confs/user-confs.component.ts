import { IngredientService } from './../../ingredient/ingredient.service';
import { FoodCategory } from './../../models/ingredient/foodCategory.model';
import { UserConfs } from './../../models/user/userConfs.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../models/user/user.model';

@Component({
  selector: 'app-user-confs',
  templateUrl: './user-confs.component.html',
  styleUrls: ['./user-confs.component.css']
})
export class UserConfsComponent implements OnInit {

  userConf: UserConfs;
  currentUser: User;
  categories: FoodCategory[];
  bannedCategories: FoodCategory[] = [];
  selectedCategory: FoodCategory;
  mealsAsString: string;

  constructor(private userService: UserService, private ingredientService: IngredientService) {
    this.currentUser = this.userService.currentUserValue;
   }

  ngOnInit() {
    this.refreshConfs();
    this.ingredientService.foodCategories().subscribe(data => this.categories = data);
  }

  refreshConfs() {
    this.userService.getUserConfs(this.currentUser.id).subscribe(data => {
      this.userConf = data;
      this.bannedCategories = data.bannedCategories;
      this.mealsAsString = data.meals.join(', ');
    });
  }

  updateConfs() {
    this.userConf.bannedCategories = this.bannedCategories;
    this.userConf.meals = this.mealsAsString.split(', ');
    this.userService.updateUserConfs(this.currentUser.id, this.userConf).subscribe(data => {
      this.refreshConfs();
    });
  }

  banCategory() {
    if (this.bannedCategories.indexOf(this.selectedCategory) === -1) {
      this.bannedCategories.push(this.selectedCategory);
    }
  }

  unBanCategory(category: FoodCategory) {
    this.bannedCategories = this.bannedCategories.filter(bc => bc !== category);
  }

}
