import { MenuDay } from './menuDay.model';
import { Stat } from '../nutrition/Stat.model';

export class Menu {
  id: number;
  startDate: string;
  days: MenuDay[];
  stats: Stat[];
}
