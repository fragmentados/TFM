import { NgModule, Provider, ModuleWithProviders } from '@angular/core';
import { CalendarWeekViewEventComponent } from './calendar-week-view-event/calendar-week-view-event.component';
import { CalendarWeekViewHeaderComponent } from './calendar-week-view-header/calendar-week-view-header.component';
import { CalendarWeekViewHourSegmentComponent } from './calendar-week-view-hour-segment/calendar-week-view-hour-segment.component';
import { CalendarWeekViewComponent } from './calendar-week-view/calendar-week-view.component';
import { ResizableModule } from 'angular-resizable-element';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { CommonModule } from '@angular/common';
import { CalendarCommonModule, CalendarModuleConfig, CalendarEventTitleFormatter,
  CalendarDateFormatter, CalendarUtils } from './common/calendar-common.module';
import { CalendarWeekViewStatsComponent } from './calendar-week-view-stats/calendar-week-view-stats.component';

@NgModule({
  declarations: [CalendarWeekViewEventComponent,
    CalendarWeekViewHeaderComponent,
    CalendarWeekViewHourSegmentComponent,
    CalendarWeekViewComponent,
    CalendarWeekViewStatsComponent],
  imports: [
    CommonModule,
    ResizableModule,
    DragAndDropModule,
    CalendarCommonModule
  ],
  exports : [
    ResizableModule,
    DragAndDropModule,
    CalendarCommonModule,
    CalendarWeekViewComponent,
    CalendarWeekViewHeaderComponent,
    CalendarWeekViewEventComponent,
    CalendarWeekViewHourSegmentComponent,
    CalendarWeekViewStatsComponent
  ]
})
export class CalendarModule {
  static forRoot(
    dateAdapter: Provider,
    config: CalendarModuleConfig = {}
  ): ModuleWithProviders {
    return {
      ngModule: CalendarModule,
      providers: [
        dateAdapter,
        config.eventTitleFormatter || CalendarEventTitleFormatter,
        config.dateFormatter || CalendarDateFormatter,
        config.utils || CalendarUtils
      ]
    };
  }
}
