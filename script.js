async function getWeather() {
    const cityInput = document.getElementById("cityInput").value;
    const countryInput = document.getElementById("countryInput").value;
    const weatherInfo = document.getElementById("weatherInfo");

    if (cityInput && countryInput) {
        const apiKey = "ff2ed63375f53baee78d3b1d241f6fb2";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput},${countryInput}&appid=${apiKey}&units=metric`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (response.ok) {
                const temperature = data.main.temp;
                const description = data.weather[0].description;
                const location = `${data.name}, ${data.sys.country}`;

                weatherInfo.innerHTML = `${location}: ${temperature}°C, ${description}`;
            } else {
                weatherInfo.innerHTML = "Error fetching weather data. Please check your input.";
            }
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    } else {
        weatherInfo.innerHTML = "Please enter both city and country.";
    }
}
