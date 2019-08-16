import { MenuTemplateService } from './menuTemplate.service';
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
import { UserService } from '../user.service';
import { MenuSaveTemplateComponent } from './menu-save-template/menu-save-template.component';
import { MenuSelectTemplateComponent } from './menu-select-template/menu-select-template.component';

@NgModule({
  declarations: [MenuCalendarComponent, MenuSaveTemplateComponent, MenuSelectTemplateComponent],
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
  entryComponents: [
    MenuSaveTemplateComponent,
    MenuSelectTemplateComponent
  ],
  providers: [MenuService, MenuTemplateService, UserService]
})
export class MenuModule { }
