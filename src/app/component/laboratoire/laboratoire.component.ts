import { Component } from '@angular/core';
import Images from '../../../constants/image';

@Component({
  selector: 'app-laboratoire',
  imports: [],
  templateUrl: './laboratoire.component.html',
  styleUrl: './laboratoire.component.css'
})
export class LaboratoireComponent {
  niveauLiquide = 0;
  images = Images;
  vidageEnCours = false;
  enregistrementEnCours = false;
  listeIngredients: string[] = []; // Ajout d'un tableau pour stocker les ingrédients

  ajouterIngredient(ingredient: string) {
    if (this.niveauLiquide < 100) {
      this.niveauLiquide += 20; // Augmente de 20% à chaque ajout
      this.listeIngredients.push(ingredient); // Ajoute l'ingrédient à la liste
    }
  }

  viderVerre() {
    this.vidageEnCours = true;
    
    // Simule une animation de vidage (1 seconde)
    setTimeout(() => {
      this.niveauLiquide = 0; // Réinitialise le niveau de liquide
      this.listeIngredients = []; // Vide la liste des ingrédients
      this.vidageEnCours = false;
      
      console.log('Verre vidé !', this.listeIngredients);
    }, 1000);
  }

  ajouterAuFrigo() {
    if (this.niveauLiquide === 0) {
      console.warn("Le verre est vide !");
      return;
    }

    this.enregistrementEnCours = true;
    
    // Simule un appel API (2 secondes)
    setTimeout(() => {
      const cocktail = {
        nom: 'Cocktail personnalisé',
        ingredients: this.listeIngredients,
        niveau: this.niveauLiquide,
        date: new Date()
      };
      
      console.log('Cocktail enregistré:', cocktail);
      this.enregistrementEnCours = false;
      
      // Option: Réinitialiser après enregistrement
      // this.viderVerre();
    }, 2000);
  }
}