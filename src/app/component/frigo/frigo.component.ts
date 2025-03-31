import { Component } from '@angular/core';
import Images from '../../../constants/image';

@Component({
  selector: 'app-frigo',
  imports: [],
  templateUrl: './frigo.component.html',
  styleUrl: './frigo.component.css'
})
export class FrigoComponent {
  images = Images;
}
