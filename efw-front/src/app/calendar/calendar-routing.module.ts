import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarTestComponent } from './calendar-test/calendar-test.component'

const routes: Routes = [
  {
    path: '',
    component: CalendarTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule {}
