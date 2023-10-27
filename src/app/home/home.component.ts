import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    '../../assets/home/css/fontawesome.min.css',
  ],
})
export class HomeComponent implements OnInit {
  weatherInfo: string = ''; // Informations sur la météo
  city: string = 'Denain,fr'; // Ville par défaut pour la météo

  ngOnInit() {
    const apiKey = 'bdb616a0479919c67aecbc38787f1d02';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apiKey}`;

    // Effectue une requête à l'API OpenWeatherMap pour obtenir des données météo
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
