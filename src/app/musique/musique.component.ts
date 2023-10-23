import { Component } from '@angular/core';
import { EventMusical } from './event-musical.model';

@Component({
  selector: 'app-musique',
  templateUrl: './musique.component.html',
  styleUrls: ['./musique.component.css'],
})
export class MusiqueComponent {
  evenements: EventMusical[] = [];

  constructor() {
    this.evenements.push(
      new EventMusical(
        'ACOUSTIC ROCK IT - GREG ZLAP',
        '../../assets/evenement/musique/ACOUSTIC-ROCK-IT.jpeg',
        'Samedi, 18 novembre, 2023 - 20:00 - 21:45',
        'ROEULX - Salle des fêtes : Rue Roger Salengro',
        '5€/Gratuit',
        '1h45',
        'Tout public',
        'Venez vous nourrir de l’énergie de la musique live en partageant ce moment unique !',
        'Harmoniciste et chanteur blues incontournable, Greg Zlap a longtemps joué avec de grands noms comme Eddy Mitchell, Paul Personne ou encore Johnny Halliday avec qui il tourna de 2004 à 2017.Pour fêter ses 30 ans de scène, le prince de l’harmonica présente Acoustic Rock It. Entouré de musiciens d’exception, Greg Zlap met en scène un show intimiste, authentique, au plus proche du public.',
        'https://20h40.fr'
      )
    );
    this.evenements.push(
      new EventMusical(
        'LUBOMYR MELNYK',

        '../../assets/evenement/musique/lubomyr_melnik.jpeg',

        'Dimanche, 3 décembre, 2023 - 16:30 - 17:30',

        'Bruille-Saint-Amand - Église Notre Dame au bois : place Désiré Dupont',

        '5€/Gratuit',

        '1 heure',

        'Tout public',

        'Lubomyr Melnyk a créé et développé depuis les années 70 la «Continuous Music», un nouveau langage pour le piano qui transcende toutes les techniques musicales.',

        'Tel un maître de Kung-Fu, il a, dans son approche si singulière de l’instrument, emmené très loin les possibilités de timbre, d’harmoniques et de résonance du piano. Alliant délicatesse et virtuosité, Lubomyr Melnyk est aussi détenteur de deux records du monde : celui du pianiste le plus rapide de tous les temps ainsi que celui du plus grand nombre de notes jouées en une heure Vous l’aurez compris, plus qu’un concert, c’est une véritable expérience sensible, quasi mystique, que nous vous invitons à partager… à ne manquer sous aucun prétexte !',

        'https://lubomyrmelnyk.com'
      )
    );

    this.evenements.push(
      new EventMusical(
        'COCON-COQUILLE - COMPAGNIE LA VACHE BLEUE',

        '../../assets/evenement/musique/COCON-COQUILLE.png',

        'Mercredi, 6 décembre, 2023 - 10:30 - 11:00 et Mercredi, 6 décembre, 2023 - 16:30 - 17:00',

        'Raismes - Salle des fêtes : Grand Place',

        '5€/Gratuit',

        '30 minutes',

        'À partir de 4 ans',

        'Il y a des petits chemins de coquillage qu’on emprunte pour se perdre, se retrouver, s’ennuyer, jouer, grandir et inventer encore des histoires, pour enfin choisir un monde comme on aime.',

        'Tel un maître de Kung-Fu, il a, dans son approche si singulière de l’instrument, emmené très loin les possibilités de timbre, d’harmoniques et de résonance du piano. Alliant délicatesse et virtuosité, Lubomyr Melnyk est aussi détenteur de deux records du monde : celui du pianiste le plus rapide de tous les temps ainsi que celui du plus grand nombre de notes jouées en une heure Vous l’aurez compris, plus qu’un concert, c’est une véritable expérience sensible, quasi mystique, que nous vous invitons à partager… à ne manquer sous aucun prétexte !',

        'https://www.vache-bleue.org'
      )
    );
    this.evenements.push(
      new EventMusical(
        "BARAQUÉ - COMPAGNIE L'OURS À PIED",

        '../../assets/evenement/musique/baraque.jpeg',

        'Samedi, 9 décembre, 2023 - 17:00 - 18:00',

        'Wavrechain-sous-Denain - Salle polyvalente Lucien Laurette : rue Charles Isbergues',

        '5€/Gratuit',

        '1 heure',

        'Tout public, à partir de 7 ans',

        'Sortez vos shorts et vos baskets, Baraqué vous propose un concert de remise en forme infaillible avant les fêtes !',

        'Quatre musiciens et une coach de fitness montent ensemble sur scène et vous embarquent dans un véritable bal sportif. Un spectacle participatif qui se transforme rapidement en séance de fitness collective et rock’n’roll et qui interroge au passage le culte du corps tellement valorisé dans nos sociétés. Quelque part entre sueur et réflexion, Baraqué deviendra vite votre salle de sport préférée !',

        'https://www.lorangefluo.fr/baraque/'
      )
    );
  }
}
