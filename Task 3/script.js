function convertTemperature() {
    let temperature = document.getElementById("temperature").value;
    let unit = document.getElementById("unit").value;
    let convertedTemp = "";

    // Validate input (must be a number)
    if (temperature.trim() === "" || isNaN(temperature)) {
        alert("⚠️ Please enter a valid numeric temperature!");
        return;
    }

    temperature = parseFloat(temperature);

    // Conversion Logic
    if (unit === "Celsius") {
        convertedTemp = `${(temperature * 9/5 + 32).toFixed(2)} °F | ${(temperature + 273.15).toFixed(2)} K`;
    } else if (unit === "Fahrenheit") {
        convertedTemp = `${((temperature - 32) * 5/9).toFixed(2)} °C | ${(((temperature - 32) * 5/9) + 273.15).toFixed(2)} K`;
    } else if (unit === "Kelvin") {
        convertedTemp = `${(temperature - 273.15).toFixed(2)} °C | ${((temperature - 273.15) * 9/5 + 32).toFixed(2)} °F`;
    }

    // Display Result with Animation
    let resultDisplay = document.getElementById("converted-temp");
    resultDisplay.innerText = convertedTemp;
    resultDisplay.style.color = "#ff6f61";
    resultDisplay.style.transition = "0.3s ease-in-out";
}
