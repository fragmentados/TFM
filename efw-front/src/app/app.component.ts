import { ApplicationStateService } from './application-state.service';
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
  isMobile = false;

  constructor(private router: Router, private userService: UserService, private appState: ApplicationStateService) {
    this.userService.currentUser.subscribe(x => {
      this.currentUser = x;
    });
    this.isMobile = this.appState.getIsMobileResolution();
  }

  ngOnInit() {
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/users/login']);
  }

  displayMobileNavBar() {
    const x = document.getElementById('myTopnav');
    if (x.className === 'efw-topnav') {
      x.className += ' responsive';
    } else {
      x.className = 'efw-topnav';
    }
  }
}
