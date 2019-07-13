import { AddIngredient } from '../models/ingredient/addIngredient.model';
import { BACKEND_URL } from './../models/service';
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Ingredient } from '../models/ingredient/ingredient.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class IngredientService {

  constructor(private http: HttpClient) {}

  private ingredientUrl = BACKEND_URL + 'ingredients';

  public getUserIngredients(userId: number) {
    const params = new HttpParams().set('userId', userId.toString());
    return this.http.get<Ingredient[]>(this.ingredientUrl, { params: params });
  }

  public deleteIngredient(ingredient) {
    return this.http.delete(this.ingredientUrl + '/' + ingredient.id);
  }

  public createIngredient(ingredient: AddIngredient) {
    return this.http.post<Ingredient>(this.ingredientUrl, ingredient);
  }

}
