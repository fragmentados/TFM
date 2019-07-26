import { FormsModule } from '@angular/forms';
import { ViewStatsComponent } from './view-stats-dashboard/view-stats/view-stats.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewStatsDashboardComponent } from './view-stats-dashboard/view-stats-dashboard.component';

@NgModule({
  declarations: [ViewStatsComponent, ViewStatsDashboardComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ViewStatsDashboardComponent, ViewStatsComponent]
})
export class NutritionModule { }
