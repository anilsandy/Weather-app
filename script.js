async function getWeather() {
    const apiKey = OpenWeatherMap; // Replace with OpenWeatherMap API key
    const city = document.getElementById('city').value.trim();

    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        const { name, main: { temp }, weather } = data;

        document.getElementById('cityName').innerText = `Weather in ${name}`;
        document.getElementById('temperature').innerText = `Temperature: ${temp}°C`;
        document.getElementById('condition').innerText = `Condition: ${weather[0].description}`;
    } catch (error) {
        alert(error.message);
    }
}
