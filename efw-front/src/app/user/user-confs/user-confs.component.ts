import { LOGGED_IN_USER } from './../../models/service';
import { UserConfs } from './../../models/user/userConfs.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-confs',
  templateUrl: './user-confs.component.html',
  styleUrls: ['./user-confs.component.css']
})
export class UserConfsComponent implements OnInit {

  userConf: UserConfs;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.refreshConfs();
  }

  refreshConfs() {
    this.userService.getUserConfs(LOGGED_IN_USER).subscribe(data => {
      this.userConf = data;
    });
  }

  updateConfs() {
    this.userService.updateUserConfs(LOGGED_IN_USER, this.userConf).subscribe(data => {
      this.refreshConfs();
    });
  }

}
