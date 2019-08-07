import { FoodCategory } from './../ingredient/foodCategory.model';
export class UserConfs {

  maxCaloriesPerWeek: number;
  maxProteinsPerWeek: number;
  maxFatsPerWeek: number;
  maxCarbohydratesPerWeek: number;
  bannedCategories: FoodCategory[];
  meals: string[];
}
