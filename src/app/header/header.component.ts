import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isMenuClosed: boolean = true;

  toggleMenu() {
    this.isMenuClosed = !this.isMenuClosed;
  }
  weatherInfo: string = '';

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
