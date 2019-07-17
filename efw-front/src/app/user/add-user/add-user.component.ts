import { Component } from '@angular/core';

import { User } from '../../models/user/user.model';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  user: User = new User();

  constructor(private userService: UserService) {}

  createUser(): void {
    this.userService.createUser(this.user)
        .subscribe( data => {
          alert('User created successfully.');
        });

  }

}
