import { Response } from './../models/response.model';
import { BACKEND_URL } from './../models/service';
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Menu } from '../models/menu/menu.model';
import { AddDishToMenu } from '../models/menu/addDishToMenu.model';
import { ShoppingList } from '../models/menu/shoppingList/shoppingList.model';
import { AddMenu } from '../models/menu/addMenu.model';
import { UpdateDishOnMenu } from '../models/menu/updateDishOnMenu.model';

@Injectable()
export class MenuService {

  constructor(private http: HttpClient) {}

  private menuUrl = BACKEND_URL + 'menus';

  public createMenu(userId: number, startDate: Date) {
    const menu: AddMenu  = new AddMenu();
    menu.userId = userId;
    menu.startDate = this.formatDate(startDate);
    return this.http.post<Menu>(this.menuUrl, menu);
  }

  public getUserMenu(userId: number, startDate: Date) {
    const params = new HttpParams().set('startDate', this.formatDate(startDate)).set('userId', userId.toString());
    return this.http.get<Menu>(this.menuUrl, { params: params });
  }

  public getShoppingList(menuId: number) {
    return this.http.get<ShoppingList>(this.menuUrl + '/' + menuId + '/shoppingList');
  }

  public clearMenu(menuId: number) {
    return this.http.delete<Response>(this.menuUrl + '/' + menuId + '/clearMenu');
  }

  public addDishToMenu(menuId: number, addDishToMenu: AddDishToMenu) {
    return this.http.post<Response>(this.menuUrl + '/' + menuId + '/dish', addDishToMenu);
  }

  public randomGenerateMenu(menuId: number, userId: number) {
    const params = new HttpParams().set('userId', userId.toString());
    return this.http.post<Menu>(this.menuUrl + '/' + menuId + '/random', {}, { params: params });
  }

  public generateValidMenu(menuId: number, userId: number) {
    const params = new HttpParams().set('userId', userId.toString());
    return this.http.post<Menu>(this.menuUrl + '/' + menuId + '/valid', {}, { params: params });
  }

  public updateDishDateOnMenu(menuId: number, updateDishOnMenu: UpdateDishOnMenu) {
    return this.http.put<Menu>(this.menuUrl + '/' + menuId + '/dish', updateDishOnMenu);
  }

  public removeDishFromMenu(menuId: number, addDishToMenu: AddDishToMenu) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: addDishToMenu
    };
    return this.http.delete<Response>(this.menuUrl + '/' + menuId + '/dish', httpOptions);
  }

  public formatDate(startDate: Date) {
    return startDate.getFullYear() + '-' +
           ('0' + (startDate.getMonth() + 1)).slice(-2) + '-' +
           ('0' + startDate.getDate()).slice(-2);
  }

  public formatDateWithHour(startDate: Date) {
    return startDate.getFullYear() + '-' +
           ('0' + (startDate.getMonth() + 1)).slice(-2) + '-' +
           ('0' + startDate.getDate()).slice(-2) + ' ' +
           ('0' + startDate.getHours()).slice(-2) + ':' +
           ('0' + startDate.getMinutes()).slice(-2) + ':' +
           ('0' + startDate.getSeconds()).slice(-2) + '.' + '0';
  }

}
