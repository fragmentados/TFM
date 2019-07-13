import { CalendarCommonModule, DateAdapter } from './calendar/common/calendar-common.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app.routing.module';
import {UserService} from './user/user.service';
import {HttpClientModule} from '@angular/common/http';
import {AddUserComponent} from './user/add-user.component';
import { CalendarModule } from './calendar/calendar.module';
import { adapterFactory } from './calendar/date-adapters/date-fns';
import { MenuService } from './menu/menu.service';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UserComponent
  ],
  imports: [
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
  providers: [UserService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
