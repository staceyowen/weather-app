function displayTemperature(response) {
    console.log(response.data);
    
    let cityElement = document.querySelector("#city");
    let temperatureElement = document.querySelector("#temperature");
    let descriptionElement = document.querySelector("#weather-description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let feelslikeElement = document.querySelector("#feels-like");

    cityElement.innerHTML = response.data.name;
    temperatureElement.innerHTML = Math.round (response.data.main.temp);
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round (response.data.wind.speed);
    feelslikeElement.innerHTML = Math.round (response.data.main.feels_like);
}

let apiKey = "dfc2e82cce5dfe54171afee9e327c236";
  let city = "Los Angeles"
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;


axios.get(apiUrl).then(displayTemperature);