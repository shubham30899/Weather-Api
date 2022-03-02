
const weatherApi = {
    key: "ceab25b8b5860c0fe1ac6a28022389f1",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

const search_button = document.getElementById("search-button");
const input = document.getElementById("search-input");


weather_result = (data)=>{
    document.getElementById("loc").innerHTML = data.name+", "+data.sys.country;
    document.getElementById("temp-icon").src = "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
    document.getElementById("temp-value").innerHTML = Math.round(data.main.temp);
    document.getElementById("cli").innerHTML = data.weather[0].main;
    
    
}
function getWeatherData(city) {

    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`).then(data => {
        return data.json();
    }).then(weather_result);

}

search_button.addEventListener('click', (event)=>{
    if(input.value == "")
        return false;
    else
        getWeatherData(input.value);
});

window.addEventListener('load', ()=>{
    getWeatherData("Mathura");
  });