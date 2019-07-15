import { ViewStatsComponent } from './view-stats/view-stats.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ViewStatsComponent],
  imports: [
    CommonModule
  ],
  exports: [ViewStatsComponent]
})
export class NutritionModule { }
