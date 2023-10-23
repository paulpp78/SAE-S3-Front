import { Component } from '@angular/core';
import { EventCommunaute } from './event-communaute.model';

@Component({
  selector: 'app-event-communaute',
  templateUrl: './event-communaute.component.html',
  styleUrls: ['./event-communaute.component.css'],
})
export class EventCommunauteComponent {
  evenements: EventCommunaute[] = [];

  constructor() {
    this.evenements.push(
      new EventCommunaute(
        'CONSEIL COMMUNAUTAIRE 13-11-23',
        'Lundi, 13 novembre, 2023 - 18:00 - 20:00',
        'Site Minier Arenberg - La Porte du Hainaut - Salle du LEAUD',
        '../../assets/evenement/communaute/conseil-communautaire.png'
      )
    );
    this.evenements.push(
      new EventCommunaute(
        'CONSEIL COMMUNAUTAIRE 11-12-2023',
        'Lundi, 11 décembre, 2023 - 18:00 - 21:00',
        'Site minier de Wallers-Arenberg'
      )
    );
  }
}
