import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ingredient } from '../models/ingredient.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class IngredientService {

  constructor(private http: HttpClient) {}

  private ingredientUrl = 'http://192.168.0.15:8080/efw-back/ingredients';

  public getIngredients() {
    return this.http.get<Ingredient[]>(this.ingredientUrl);
  }

  public deleteIngredient(ingredient) {
    return this.http.delete(this.ingredientUrl + '/' + ingredient.id);
  }

  public createIngredient(ingredient) {
    return this.http.post<Ingredient>(this.ingredientUrl, ingredient);
  }

}