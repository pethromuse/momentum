const API_KEY = '48ce85ac87ea33c0c178048e9b162489';

function onGeoOk(position){

const lat = position.coords.latitude;
const lng = position.coords.longitude;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
console.log(url);
fetch(url).then(response => response.json()).then(data => {
    const weather = document.querySelector('#weather span:first-child');
    const city = document.querySelector('#weather span:last-child');
    weather.innerText = data.name;
    city.innerText = data.weather[0].main;
    console.log(data.name, data.weather[0].main)
});
}

function onGeoError(){
    alert("Can't find you. No weather data for  you");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

/* https://openweathermap.org/current */

