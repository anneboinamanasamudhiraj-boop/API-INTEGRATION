// Function to get weather data
async function getWeather() {
    alert("Button Clicked");

    // Get city name from input
    const city = document.getElementById("city").value;

    // OpenWeather API Key
    const apiKey = "4847b0a1d57da53e73f2eb6768b102cd";

    // API URL
    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        // Fetch weather data
        const response = await fetch(url);

        // Convert response to JSON
        const data = await response.json();
        console.log(data);

        // Check city exists or not
        if(data.cod == "404"){

            document.getElementById("result").innerHTML =
            "❌ City Not Found";

            return;
        }

        // Display weather details
        document.getElementById("result").innerHTML = `
            <h3>${data.name}</h3>
            <p>🌡 Temperature: ${data.main.temp} °C</p>
            <p>☁ Weather: ${data.weather[0].description}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>
        `;

    } catch(error) {

        document.getElementById("result").innerHTML =
        "⚠ Something Went Wrong";
    }
}
