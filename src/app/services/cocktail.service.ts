// src/app/services/cocktail.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cocktail } from '../models/cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private apiUrl = '/api/cocktails';

  constructor(private http: HttpClient) { }

  // Récupérer tous les cocktails
  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>(this.apiUrl);
  }

  // Récupérer un cocktail par ID
  getCocktail(id: number): Observable<Cocktail> {
    return this.http.get<Cocktail>(`${this.apiUrl}/${id}`);
  }

  // Créer un nouveau cocktail
  createCocktail(cocktail: Omit<Cocktail, 'id'>): Observable<Cocktail> {
    // Omit<Cocktail, 'id'> signifie qu'on envoie un cocktail sans l'id
    return this.http.post<Cocktail>(this.apiUrl, cocktail);
  }

  // Mettre à jour un cocktail
  updateCocktail(id: number, cocktail: Cocktail): Observable<Cocktail> {
    return this.http.put<Cocktail>(`${this.apiUrl}/${id}`, cocktail);
  }

// Dans votre CocktailService
deleteCocktail(id: number): Promise<void> {
  return this.http.delete<void>(`${this.apiUrl}/${id}`).toPromise()
    .then(() => undefined) // Conversion explicite en Promise<void>
    .catch(err => {
      console.error('Erreur de suppression:', err);
      throw err; // Important pour propager l'erreur
    });
}

}