import { UserService } from '../../user.service';
import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/user/login.model';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  loginAttempt() {
    this.userService.login(this.login).pipe(first())
    .subscribe(
      data => {
        this.router.navigate(['/menu']);
      },
      error => {
        alert('Error');
        // this.error = error;
        // this.loading = false;
      }
    );
  }

}
