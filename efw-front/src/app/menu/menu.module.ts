import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuCalendarComponent } from './menu-calendar/menu-calendar.component';
import { MenuRoutingModule } from './menu-routing.module';
import { FormsModule } from '@angular/forms';
import { MenuService } from './menu.service';
import { CalendarModule } from '../calendar/calendar.module';
import { DateAdapter } from '../calendar/date-adapters/date-adapter';
import { adapterFactory } from '../calendar/date-adapters/date-fns';
import { MatDialogModule } from '@angular/material/dialog';
import { NutritionModule } from '../nutrition/nutrition.module';

@NgModule({
  declarations: [MenuCalendarComponent],
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    MatDialogModule,
    MenuRoutingModule,
    NutritionModule
  ],
  providers: [MenuService]
})
export class MenuModule { }
