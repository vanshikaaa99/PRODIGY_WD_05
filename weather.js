const apiKey = "YOUR_API_KEY_HERE"; 

function getWeather() {
    const city = document.getElementById("locationInput").value;
    const resultDiv = document.getElementById("weatherResult");

    if (!city) {
        resultDiv.innerHTML = "Please enter a city name.";
        return;
    }

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiURL)
        .then(response => {
            if (!response.ok) throw new Error("City not found");
            return response.json();
        })
        .then(data => {
            const temp = data.main.temp;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const wind = data.wind.speed;

            resultDiv.innerHTML = `
                <strong>Weather in ${data.name}:</strong><br>
                🌡 Temperature: ${temp} °C<br>
                🌤 Condition: ${description}<br>
                💧 Humidity: ${humidity}%<br>
                🌬 Wind Speed: ${wind} m/s
            `;
        })
        .catch(error => {
            resultDiv.innerHTML = `Error: ${error.message}`;
        });
}