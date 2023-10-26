import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [
    './footer.component.css',
    '../../assets/home/css/fontawesome.min.css',
  ],
})
export class FooterComponent {
  address: string = 'Av, Michel Rondet.';
  city: string = '59135 Wallers';
  phoneNumber: string = '03 27 09 05 05';

  onContactButtonClicked() {
    console.log('Bouton de contact cliqué !');
  }
}
