import { UserRoutingModule } from './user-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { UserComponent } from './user/user.component';
import { UserService } from '../user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserConfsComponent } from './user-confs/user-confs.component';


@NgModule({
  declarations: [UserComponent, AddUserComponent, UserConfsComponent],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ],
  exports: [UserComponent, AddUserComponent]
})
export class UserModule { }
