const apikey="86f828f251986e87668d7c74b9a1f816";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response=await fetch(apiurl + city +`&appid=${apikey}`);
    var data=await response.json();

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
        document.querySelector(".wind").innerHTML = data.wind.speed +"km/hr";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src="clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "clear.png";
        }
        else if (data.weather[0].main == "rain") {
            weatherIcon.src = "rain.png";
        }
        else if (data.weather[0].main == "drizzle") {
            weatherIcon.src = "drizzle.png";
        }
        else if (data.weather[0].main == "mist") {
            weatherIcon.src = "mist.png";
        }
        else if (data.weather[0].main == "snow") {
            weatherIcon.src = "snow.png";
        }
    
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display = "none";

    }

        
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})