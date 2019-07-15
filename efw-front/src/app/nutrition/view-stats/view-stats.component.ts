import { Component, Input } from '@angular/core';
import { Stat } from '../../models/nutrition/Stat.model';

@Component({
  selector: 'app-view-stats',
  templateUrl: './view-stats.component.html',
  styleUrls: ['./view-stats.component.css']
})
export class ViewStatsComponent {

  @Input() stats: Stat[];

  @Input() areMenuStats: boolean;
}
