const apiKey = '9575abc75cd3358aa17e7d041059e540'
const apiUrlByLocation = 'http://api.openweathermap.org/geo/1.0/reverse?units=metric&'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

async function checkWeather(cityName = 'London') {


  const response = await fetch(apiUrl + `${cityName}&appid=${apiKey}`);
  if(response.status === 404) {
    document.querySelector('.temp').innerHTML = 'City not found';
    document.querySelector('.feels-like').innerHTML = '';
    document.querySelector('.city').innerHTML = '';
    document.querySelector('.humidity').innerHTML = '';
    document.querySelector('.wind').innerHTML = '';
    document.querySelector('.day').innerHTML = '';
    document.querySelector('.date').innerHTML = '';
    document.getElementById('city-name').value = ''
    return;
  }


  if (response.ok) {
    const data = await response.json();
    console.log(data);
    document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}°C`;
    document.querySelector('.feels-like').innerHTML = `Feels like: ${Math.round(data.main.feels_like)}°C`;
    document.querySelector('.city').innerHTML = `${data.name}, ${data.sys.country}`;
    document.querySelector('.humidity').innerHTML = `Humidity: ${data.main.humidity}%`;
    document.querySelector('.wind').innerHTML = `Wind speed: ${data.wind.speed} km/h`;
    document.querySelector('.day').innerHTML = new Date().toLocaleDateString('en-EN', { weekday: 'long' });
    document.querySelector('.date').innerHTML = new Date().toLocaleDateString('en-EN', { month: 'long', day: 'numeric', year: 'numeric' });
  } else {
    console.log('checkWeather data not found. Please check the city name and try again.');
  }
  document.getElementById('city-name').value = ''
}

// Geting the user's location and show the weather for their city
navigator.geolocation.getCurrentPosition(async position => {
  const lat = parseFloat(position.coords.latitude.toFixed(4));
  const lon = parseFloat(position.coords.longitude.toFixed(4));
  const response = await fetch(apiUrlByLocation + `lat=${lat}&lon=${lon}&appid=${apiKey}`);
  if (response.ok) {
    const data = await response.json();
    const cityName = data[0].name;
    checkWeather(cityName);
  } else {
    console.log('Location Weather data not found. Please check the city name and try again.');

  }
});

function handleKeyPress(event) {
  if (event.keyCode === 13) {
    checkWeather(document.getElementById('city-name').value);
  }
}
