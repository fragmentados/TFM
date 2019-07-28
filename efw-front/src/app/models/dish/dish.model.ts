import { Stat } from '../nutrition/stat.model';
import { DishIngredient } from './dishIngredient.model';

export class Dish {

  id: string;
  name: string;
  ingredients: DishIngredient[];
  stats: Stat[];
}
