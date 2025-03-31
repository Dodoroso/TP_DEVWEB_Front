import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [		
    RouterLink,
		RouterLinkActive,
		NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
