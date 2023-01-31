

let now = new Date();

let timing = document.querySelector(".timing");


let hours = now.getHours();
let minutes = now.getMinutes();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = days[now.getDay()];

timing.innerHTML = `${day} ${hours}:${minutes}`;



function displayWeatherCondition(response) {
    document.querySelector("#city").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
    document.querySelector("#temperature-description").innerHTML = response.data.weather[0].main;
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  let apiKey = "3dce9b1c66837262a25b3f448d354a76";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);


 
  }
  function searchLocation(position) {
    let apiKey = "3dce9b1c66837262a25b3f448d354a76";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherCondition);
    console.log(apiUrl);
  
  }

  function getCurrentLocation (event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation)
  }

  let currentLocationButton = document.querySelector("#current-location-button");
  currentLocationButton.addEventListener("click", getCurrentLocation);
 
 let citySearch = document.querySelector("#search-city-button");
 citySearch.addEventListener("click", search);

 let cityEnter = document.querySelector("#search-form");
 cityEnter.addEventListener("submit", search )


