// src/app/services/cocktail.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Ingredient {
  id: number;
  nom: string;
  quantite: string;
  unite: string;
}

export interface Cocktail {
  id: number;
  nom: string;
  description: string;
  alcoolise: boolean;
  imageUrl: string;
  ingredients: Ingredient[];
}

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  deleteCocktail(cocktailId: number) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = '/api/cocktails';

  constructor(private http: HttpClient) { }

  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>(this.apiUrl);
  }
}