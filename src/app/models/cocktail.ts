// src/app/models/cocktail.model.ts
import { Ingredient } from "./ingredient";

export interface Cocktail {
  id: number;
  nom: string;
  description: string;
  alcoolise: boolean;
  imageUrl: string;
  ingredients: Ingredient[];
}