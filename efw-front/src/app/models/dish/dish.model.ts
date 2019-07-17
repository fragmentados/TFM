import { Ingredient } from '../ingredient/ingredient.model';
import { Stat } from '../nutrition/stat.model';

export class Dish {

  id: string;
  name: string;
  ingredients: Ingredient[];
  stats: Stat[];
}
