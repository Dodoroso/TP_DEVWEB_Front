import { Component } from '@angular/core';
import Images from '../../../constants/image';
import { Cocktail, CocktailService } from '../../services/cocktail.service.spec';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-frigo',
  imports: [NgForOf,NgIf],
  templateUrl: './frigo.component.html',
  styleUrl: './frigo.component.css'
})
export class FrigoComponent {
  images = Images;

  cocktails: Cocktail[] = [];
  loading = true;
  error = false;

  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.loadCocktails();
  }

  loadCocktails(): void {
    this.cocktailService.getCocktails().subscribe({
      next: (data) => {
        this.cocktails = data;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }

}
