import { Component, OnInit } from '@angular/core';
import { Cocktail, CocktailService } from '../../services/cocktail.service.spec';
import { Router } from '@angular/router';
import { NgForOf, NgIf } from '@angular/common';
import Images from '../../../constants/image';

@Component({
  selector: 'app-bar',
  imports: [NgForOf,NgIf],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.css'
})
export class BarComponent implements OnInit {
  cocktails: Cocktail[] = [];
  loading: boolean = true;
  error: string | null = null;
  successMessage: string | null = null;
  images = Images;
  constructor(
    private cocktailService: CocktailService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadCocktails();
  }

  loadCocktails(): void {
    this.loading = true;
    this.error = null;
    
    this.cocktailService.getCocktails().subscribe({
      next: (cocktails) => {
        this.cocktails = cocktails;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Erreur lors du chargement des cocktails';
        this.loading = false;
        console.error(err);
      }
    });
  }

  voirRecette(cocktailId: number): void {
    this.router.navigate(['/recette', cocktailId]);
  }

// Dans votre composant
async boireCocktail(cocktailId: number): Promise<void> {
  if (!confirm('Voulez-vous vraiment supprimer ce cocktail ?')) return;

  try {
    await this.cocktailService.deleteCocktail(cocktailId);
    this.successMessage = 'Cocktail supprimé avec succès !';
    this.cocktails = this.cocktails.filter(c => c.id !== cocktailId);
    setTimeout(() => this.successMessage = null, 3000);
  } catch (err) {
    this.error = 'Échec de la suppression';
    console.error(err);
    setTimeout(() => this.error = null, 3000);
  }
}


}
