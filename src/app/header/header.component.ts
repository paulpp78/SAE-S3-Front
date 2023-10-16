import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateBackgroundClasses(event.url);
      }
    });
  }

  updateBackgroundClasses(url: string) {
    const header = document.querySelector('.header') as HTMLElement;

    // Supprimez les classes de fond existantes
    header.classList.remove(
      'home-background',
      'communaute-background',
      'evenement-background',
      'contact-background'
    );

    // Ajoutez la classe de fond correspondante en fonction de la route
    if (url === '/home') {
      header.classList.add('home-background');
    } else if (url === '/communaute') {
      header.classList.add('communaute-background');
    } else if (url === '/evenement') {
      header.classList.add('evenement-background');
    } else if (url === '/contact') {
      header.classList.add('contact-background');
    }
  }

  isMenuClosed: boolean = true;

  toggleMenu() {
    this.isMenuClosed = !this.isMenuClosed;
  }
  weatherInfo: string = '';
  city: string = 'Denain';
  ngOnInit() {
    const apiKey = 'bdb616a0479919c67aecbc38787f1d02';
    const city = 'Denain,fr';

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          console.error("La requête vers l'API a échoué");
          throw new Error("La requête vers l'API a échoué");
        }
        return response.json();
      })
      .then((data) => {
        if (data && data.main && data.main.temp) {
          const temperature = Math.round(data.main.temp - 273.15);

          this.weatherInfo = `Température : ${temperature}°C`;
          console.log('Données météo récupérées avec succès :', data);
        } else {
          console.error(
            "Données météo non disponibles dans la réponse de l'API"
          );
          console.error("Réponse de l'API :", data);
        }
      })
      .catch((error) => {
        console.error(
          'Erreur lors de la récupération des données météo',
          error
        );
      });
  }
}
