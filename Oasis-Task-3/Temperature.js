function convertTemperature() {
    let temperature = document.getElementById("temperatureInput").value;
    let type = document.getElementById("Select-unit").value;

    let convertedTemperature;

    if (temperature.trim() === "") {
        alert("Please enter a temperature value.");
        return;
    }


    temperature = parseFloat(temperature);

    switch (type) {
        case "celsius":
            convertedTemperature = (temperature * 9 / 5) + 32;
            document.getElementById("resultArea").innerHTML = convertedTemperature.toFixed(2) + " F";
            break;
        case "fahrenheit":
            convertedTemperature = (temperature - 32) * (5 / 9);
            document.getElementById("resultArea").innerHTML = convertedTemperature.toFixed(2) + " \u00B0C";
            break;
        case "kelvin":
            convertedTemperature = temperature - 273.15;
            document.getElementById("resultArea").innerHTML = convertedTemperature.toFixed(2) + " \u00B0C";
            break;
        default:
            break;

    }
}