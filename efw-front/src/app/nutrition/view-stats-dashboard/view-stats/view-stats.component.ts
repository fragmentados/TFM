import { UserConfs } from './../../../models/user/userConfs.model';
import { Component, Input } from '@angular/core';
import { Stat } from '../../../models/nutrition/stat.model';

@Component({
  selector: 'app-view-stats',
  templateUrl: './view-stats.component.html',
  styleUrls: ['./view-stats.component.css']
})
export class ViewStatsComponent {

  @Input() viewageType: string;

  @Input() stats: Stat[];

  @Input() userConfs: UserConfs = new UserConfs();

  @Input() areMenuStats: boolean;

  isStatOverLimit(stat: Stat): boolean {
    let evaluation = false;
    if (stat.name === 'Calories') {
      evaluation = parseFloat(stat.value) > this.userConfs.maxCaloriesPerWeek;
    } else if (stat.name === 'Proteins') {
      evaluation = parseFloat(stat.value) > this.userConfs.maxProteinsPerWeek;
    } else if (stat.name === 'Fats') {
      evaluation = evaluation = parseFloat(stat.value) > this.userConfs.maxFatsPerWeek;
    } else {
      evaluation = evaluation = parseFloat(stat.value) > this.userConfs.maxCaloriesPerWeek;
    }
    return evaluation;
  }
}
