import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './models/user/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Eat Fit Week';
  currentUser: User;

  constructor(private router: Router, private userService: UserService) {
    this.userService.currentUser.subscribe(x => {
      this.currentUser = x;
    });
  }

  ngOnInit() {
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/users/login']);
}
}
