import { AddUserComponent } from './add-user/add-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserConfsComponent } from './user-confs/user-confs.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'addUser',
    component: AddUserComponent
  } ,
  {
    path: 'userConfs',
    component: UserConfsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
