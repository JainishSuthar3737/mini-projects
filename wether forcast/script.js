const apiKey = "963381e8c7891dc9bfce3b28c237b2b2";


document.getElementById('getWeather').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    getWeather(city);
});

async function getWeather(city) {
    try {
        const city=document.getElementById("city").value
        
        const currentWeatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=963381e8c7891dc9bfce3b28c237b2b2`);
        const currentWeatherData = await currentWeatherResponse.json();

       
        

        displayCurrentWeather(currentWeatherData);
        displayForecast(forecastData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayCurrentWeather(data) {
    const currentWeatherDiv = document.getElementById('currentWeather');
    currentWeatherDiv.innerHTML = `
        <h2>Current Weather in ${data.name}</h2>
        <p>Temperature: ${data.main.temp}°F</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}

function displayForecast(data) {
    const forecastDiv = document.getElementById('forecast');
    forecastDiv.innerHTML = '<h2>5-Day Forecast</h2>';

    const forecastList = data.list.filter(item => item.dt_txt.includes('12:00:00'));
    
    forecastList.forEach(item => {
        forecastDiv.innerHTML += `
            <div class="forecast-item">
                <p>Date: ${new Date(item.dt_txt).toLocaleDateString()}</p>
                <p>Temperature: ${item.main.temp}°C</p>
                <p>Weather: ${item.weather[0].description}</p>
                <p>Humidity: ${item.main.humidity}%</p>
                <p>Wind Speed: ${item.wind.speed} m/s</p>
            </div>
        `;
    });
}