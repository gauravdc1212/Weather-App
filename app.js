const inputbox = document.querySelector(".input-box");
const searchbtn = document.getElementById("searchbtn");
const weathericon = document.querySelector(".weather-icon")
const temprature = document.querySelector(".temp");
const City = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const windspeed = document.querySelector(".wind");
const apikey = "5cddc93361b215bfa48bf2e29a85c4d6"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    City.innerText = data.name;
    temprature.innerText = Math.round(data.main.temp) + "°c";
    humidity.innerText = data.main.humidity + "%";
    windspeed.innerText = data.wind.speed + "km/h";
    if (data.weather[0].main == "Clouds") {
        weathericon.src = "images/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        weathericon.src = "images/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
        weathericon.src = "images/rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weathericon.src = "images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        weathericon.src = "images/mist.png";
    }
}
searchbtn.addEventListener("click", () => {
    checkweather(inputbox.value);
});