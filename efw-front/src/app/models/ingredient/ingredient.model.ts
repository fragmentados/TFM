import { Stat } from '../nutrition/stat.model';
export class Ingredient {

  id: number;
  name: string;
  category: string;
  stats: Stat[];
}
