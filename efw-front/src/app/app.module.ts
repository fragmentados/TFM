import { CalendarCommonModule, DateAdapter } from './calendar/common/calendar-common.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import {HttpClientModule} from '@angular/common/http';
import { CalendarModule } from './calendar/calendar.module';
import { adapterFactory } from './calendar/date-adapters/date-fns';
import { UserService } from './user.service';
import { FacebookModule } from 'ngx-facebook';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FacebookModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    CalendarCommonModule,
    HttpClientModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
