import { Component } from '@angular/core';
import { CocktailService } from '../../services/cocktail.service';
import { Cocktail} from "../../models/cocktail";
import { Ingredient } from "../../models/ingredient";
import Images from '../../../constants/image';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { NgForOf, NgIf } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-laboratoire',
  templateUrl: './laboratoire.component.html',
  styleUrls: ['./laboratoire.component.css'],
  imports: [NgForOf,FormsModule,NgIf],
})
export class LaboratoireComponent {
  niveauLiquide = 0;
  images = Images;
  vidageEnCours = false;
  enregistrementEnCours = false;
  
  // Pour la création temporaire des ingrédients
  listeIngredients: Partial<Ingredient>[] = []; 
  
  // Données du formulaire
  nomCocktail = '';
  description = '';
  alcoolise = true;
  imageUrl = '';

  constructor(private cocktailService: CocktailService) {}

  ajouterIngredient(nom: string, quantite: string, unite: string) {
    if (this.niveauLiquide < 100) {
      this.niveauLiquide += 20;
      this.listeIngredients.push({
        nom,
        quantite,
        unite
        // Pas d'id car sera généré par le backend
      });
    }
  }

  viderVerre() {
    this.vidageEnCours = true;
    setTimeout(() => {
      this.niveauLiquide = 0;
      this.listeIngredients = [];
      this.vidageEnCours = false;
    }, 1000);
  }

  ajouterAuFrigo() {
    if (this.niveauLiquide === 0) {
      console.warn("Le verre est vide !");
      return;
    }

    if (!this.nomCocktail) {
      alert('Veuillez donner un nom à votre cocktail');
      return;
    }

    this.enregistrementEnCours = true;

    // Préparation des données à envoyer (sans id)
    const cocktailData: Omit<Cocktail, 'id'> = {
      nom: this.nomCocktail,
      description: this.description,
      alcoolise: this.alcoolise,
      imageUrl: this.imageUrl || 'assets/default-cocktail.jpg',
      ingredients: this.listeIngredients as Ingredient[] // Conversion en Ingredient[]
    };

    this.cocktailService.createCocktail(cocktailData).subscribe({
      next: (cocktailCree: Cocktail) => {
        console.log('Cocktail créé avec ID:', cocktailCree.id);
        this.enregistrementEnCours = false;
        this.viderVerre();
        this.resetForm();
      },
      error: (err) => {
        console.error("Erreur lors de l'enregistrement:", err);
        this.enregistrementEnCours = false;
      }
    });
  }

  private resetForm() {
    this.nomCocktail = '';
    this.description = '';
    this.alcoolise = true;
    this.imageUrl = '';
  }

  supprimerIngredient(index: number) {
    this.listeIngredients.splice(index, 1);
    this.niveauLiquide = Math.max(0, this.niveauLiquide - 20);
  }
}