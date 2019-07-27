import { UserConfs } from './../../models/user/userConfs.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../../models/user/user.model';

@Component({
  selector: 'app-user-confs',
  templateUrl: './user-confs.component.html',
  styleUrls: ['./user-confs.component.css']
})
export class UserConfsComponent implements OnInit {

  userConf: UserConfs;
  currentUser: User;

  constructor(private userService: UserService) {
    this.currentUser = this.userService.currentUserValue;
   }

  ngOnInit() {
    this.refreshConfs();
  }

  refreshConfs() {
    this.userService.getUserConfs(this.currentUser.id).subscribe(data => {
      this.userConf = data;
    });
  }

  updateConfs() {
    this.userService.updateUserConfs(this.currentUser.id, this.userConf).subscribe(data => {
      this.refreshConfs();
    });
  }

}
