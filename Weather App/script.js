const apiKey = "2a28ec27886c86aa83e4dbeefb5507d7"; // Replace with your actual API key

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const weatherInfo = document.getElementById("weatherInfo");

  if (!city) {
    weatherInfo.innerHTML = `<p>Please enter a city name.</p>`;
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const name = data.name;
      const temp = data.main.temp;
      const description = data.weather[0].description;
      const icon = data.weather[0].icon;

      weatherInfo.innerHTML = `
        <h2>${name}</h2>
        <img class="weather-icon" src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}" />
        <p><strong>${temp}°C</strong></p>
        <p>${description.charAt(0).toUpperCase() + description.slice(1)}</p>
      `;
    })
    .catch(error => {
      weatherInfo.innerHTML = `<p>Error: ${error.message}</p>`;
    });
}
