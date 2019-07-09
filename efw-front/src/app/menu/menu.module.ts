import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuCalendarComponent } from './menu-calendar/menu-calendar.component';
import { MenuRoutingModule } from './menu-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuService } from './menu.service';

@NgModule({
  declarations: [MenuCalendarComponent],
  imports: [
    CommonModule,
    FormsModule,
    MenuRoutingModule
  ],
  providers: [MenuService]
})
export class MenuModule { }
