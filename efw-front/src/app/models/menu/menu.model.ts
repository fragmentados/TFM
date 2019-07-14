import { MenuDay } from './menuDay.model';
import { MenuStat } from './menuStat.model';

export class Menu {
  id: number;
  startDate: string;
  days: MenuDay[];
  stats: MenuStat[];
}
