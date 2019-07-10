import { BACKEND_URL } from './../models/service';
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Dish } from '../models/dish.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DishService {

  constructor(private http: HttpClient) {}

  private dishUrl = BACKEND_URL + 'dishes';

  public getDishes() {
    return this.http.get<Dish[]>(this.dishUrl);
  }

  public deleteDish(dish) {
    return this.http.delete(this.dishUrl + '/' + dish.id);
  }

  public createDish(dish) {
    return this.http.post<Dish>(this.dishUrl, dish);
  }

}
