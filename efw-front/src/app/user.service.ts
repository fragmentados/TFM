import { BACKEND_URL } from './models/service';
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { User } from './models/user/user.model';
import { UserConfs } from './models/user/userConfs.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  private userUrl = BACKEND_URL + 'users';

  public getUser(userId: number) {
    return this.http.get<User>(this.userUrl + '/' + userId);
  }

  public getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }

  public getUserConfs(userId: number) {
    return this.http.get<UserConfs>(this.userUrl + '/' + userId + '/conf');
  }

  public updateUserConfs(userId: number, userConf: UserConfs) {
    return this.http.post(this.userUrl + '/' + userId + '/conf', userConf);
  }

  public deleteUser(user: User) {
    return this.http.delete(this.userUrl + '/' + user.id);
  }

  public createUser(user: User) {
    return this.http.post<User>(this.userUrl, user);
  }

}
