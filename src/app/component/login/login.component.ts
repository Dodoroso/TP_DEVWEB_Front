import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Images from '../../../constants/image';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  imports: [NgIf,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  images = Images;
  credentials = {
    email: '',
    password: ''
  };
  
  loading = false;

  onSubmit() {
    if (this.loading) return;
    
    this.loading = true;
    console.log('Tentative de connexion avec:', this.credentials);
    
    // Simuler un appel API
    setTimeout(() => {
      this.loading = false;
      console.log('Connexion simulée!');
    }, 1500);
  }
}
