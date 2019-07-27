import { BACKEND_URL } from './models/service';
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { User } from './models/user/user.model';
import { UserConfs } from './models/user/userConfs.model';
import { Login } from './models/user/login.model';
import { ResponseUser } from './models/user/responseUser.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class UserService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private userUrl = BACKEND_URL + 'users';

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

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

  public login(login: Login) {
    return this.http.post<User>(this.userUrl + '/login', login)
      .pipe(map(user => {
        if (user) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return user;
    }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}
