import { UserService } from './user/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './models/user.model';
import { LOGGED_IN_USER } from './models/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Eat Fit Week';
  user: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUser(LOGGED_IN_USER).subscribe(
      data =>
      this.user = data);
  }
}
