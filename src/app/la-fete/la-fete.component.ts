import { Component } from '@angular/core';
import { EveventLaFete } from './event-la-fete.model';
@Component({
  selector: 'app-la-fete',
  templateUrl: './la-fete.component.html',
  styleUrls: ['./la-fete.component.css'],
})
export class LaFeteComponent {
  evenements: EveventLaFete[] = [];

  constructor() {
    this.evenements.push(
      new EveventLaFete(
        'MINUS CIRCUS - COMPAGNIE DU BONJOUR',
        '../../assets/evenement/la-fete/minus_circus.jpeg',
        'Mercredi, 22 novembre, 2023 - 10:30 - 11:00',
        'Brillon - Salle des fêtes : rue du Maréchal Joffre',
        '5€/Gratuit',
        '35 minutes',
        'De 12 mois à 4 ans',
        'Linka déverrouille son énorme valise.',
        'Lumière, musique, le chapiteau du Minus Circus déploie la piste qui s’offre aux danseurs de Kazatchok, à la famille d’acrobates, à l’Homme le plus fort du monde, à la funambule qui danse avec la lune... Au rythme de musiques traditionnelles russes, Linka s’amuse et réinvente son petit monde sous les yeux complices des plus petits spectateurs.',
        'https://http://www.lacompagniedubonjour.com'
      )
    );
    this.evenements.push(
      new EveventLaFete(
        'ONE STEP HARDER - COMPAGNIE POST NÉO',
        '../../assets/evenement/la-fete/post_neo.jpeg',
        'Samedi, 25 novembre, 2023 - 18:00 - 18:45',
        'Hérin - Salle des fêtes : 16 rue Jean Jaurès',
        '5€/Gratuit',
        '40 minutes',
        'Tout public, à partir de 6 ans',
        'Entre sol et ciel, leur lien est le jumpstyle.',
        'Comme un rituel sur fond de musique celtique et nordique, quatre jeunes corps isolés se rassemblent d’un pas ferme pour former une tribu et survivre, ensemble. Se lance alors une transe chorégraphique invoquée pour s’échapper, s’exprimer.',
        'https://www.postneo.fr'
      )
    );
    this.evenements.push(
      new EveventLaFete(
        'GOUPIL ET KOSMAO - COMPAGNIE MONSTRE(S)',
        '../../assets/evenement/la-fete/goupil_et_kosmao.jpeg',
        'Mercredi, 29 novembre, 2023 - 14:30 - 15:00',
        'DOUCHY-LES-MINES - L’Imaginaire - Centre des Arts et de la Culture : Place Paul-Éluard',
        '5€/Gratuit',
        '25 minutes',
        'Tout public, à partir de 5 ans',
        'Dans ce duo comique à la Tex Avery, la guerre sera sans pitié !',
        'Dans la pure tradition des numéros de cabaret, le grand magicien Kosmao s’avance avec son assistant Goupil. Les tours de magie s’enchaînent mais la mécanique va se gripper car Goupil est un assistant rebelle. Il faut dire qu’il était d’abord un renard, puis une écharpe avant de faire ce métier.',
        'https://www.ay-roop.com'
      )
    );
    this.evenements.push(
      new EveventLaFete(
        'ACIDULÉ - COMPAGNIE EN LACETS',
        '../../assets/evenement/la-fete/acidule.jpeg',
        'Vendredi, 10 novembre, 2023 - 20:00 - 21:00',
        "Saint-Amand-les-Eaux - Théâtre des Sources : Jardins de l'Abbaye",
        '5€/Gratuit',
        '1h',
        'À partir de 10 ans',
        'Avec humour, ACIDULÉ témoigne de l’asservissement du corps au sein de cette hyperconsommation.',
        'ACIDULÉ révèle, dans un paysage graphique et plastique, toute la difficulté pour nos êtres d’évoluer dans une société qui nous pousse à acheter et consommer toujours plus au dépend de nos personnalités. Au coeur d’une scénographie remplie de cubes, quatre danseurs déambulent et tentent de se libérer d’un espace complexe qui se remplit toujours plus et se transforme, détournant avec amusement et absurdité le comportement des interprètes.',
        'https://www.compagnienlacets.fr'
      )
    );
    this.evenements.push(
      new EveventLaFete(
        "L'ADRET ET L'UBAC - COMPAGNIE LA VACHE BLEUE",
        '../../assets/evenement/la-fete/ladret_et_lubac.jpeg',
        'Mardi, 14 novembre, 2023 - 18:30 - 19:15',
        'Escaudain - Médiathèque communautaire',
        '5€/Gratuit',
        '40 minutes',
        'À partir de 9 ans',
        'Un spectacle drôle, tendre et quelque peu mélancolique.',
        'C’est l’histoire d’un petit garçon perdu – et retrouvé – dans la foire commerciale de Lille au milieu des années 1970. Mais c’est surtout une ode aux vacances au grand air et au camping… Mêlant théâtre d’images, théâtre d’objets et récit, L’Adret et l’Ubac est autant un road-movie en carton qu’un exercice de géographie intime.',
        'https://www.vache-bleue.org'
      )
    );
  }
}
