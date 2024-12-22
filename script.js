async function getWeather() {
    const apiKey = '99fc5538b95d4df217d3469b95d68230'; // Replace with your active OpenWeatherMap API key
    const city = document.getElementById('city').value.trim();

    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    const url = https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey};

    try {
        console.log('Fetching data from:', url); // Log the API URL
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('City not found or invalid API key');
        }

        const data = await response.json();
        console.log('API Response:', data); // Log the API response

        const { name, main: { temp }, weather } = data;

        // Update the HTML elements with fetched data
        document.getElementById('cityName').innerText = Weather in ${name};
        document.getElementById('temperature').innerText = Temperature: ${temp}°C;
        document.getElementById('condition').innerText = Condition: ${weather[0].description};
    } catch (error) {
        console.error('Error:', error); // Log any errors
        alert(error.message);
    }
}
