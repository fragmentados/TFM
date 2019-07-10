import { BACKEND_URL } from './../models/service';
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Menu } from '../models/menu/menu.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MenuService {

  constructor(private http: HttpClient) {}

  private menuUrl = BACKEND_URL + 'users/';

  public getUserMenu(userId: number, startDate: Date) {
    const params = new HttpParams().set('startDate', this.formatDate(startDate));
    return this.http.get<Menu[]>(this.menuUrl + userId + '/menus', { params: params });
  }

  private formatDate(startDate: Date) {
    return startDate.getFullYear() + '-' +
           ('0' + (startDate.getMonth() + 1)).slice(-2) + '-' +
           ('0' + startDate.getDate()).slice(-2);
  }

}
