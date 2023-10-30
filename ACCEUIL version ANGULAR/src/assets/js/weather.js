const apiKey = "bdb616a0479919c67aecbc38787f1d02";
const city = "Denain";

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("La requête vers l'API a échoué");
    }
    return response.json();
  })
  .then((data) => {
    if (data && data.main && data.main.temp) {
      const weatherInfo = document.getElementById("weather-info");
      const temperature = Math.round(data.main.temp - 273.15);

      const weatherHTML = `
              <p><strong>Ville :</strong> ${city}</p>
              <p><strong>Température :</strong> ${temperature}°C</p>
                          `;

      weatherInfo.innerHTML = weatherHTML;
    } else {
      console.error("Données météo non disponibles dans la réponse de l'API");
    }
  })
  .catch((error) => {
    console.error("Erreur lors de la récupération des données météo", error);
  });
