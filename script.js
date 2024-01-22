function convertTemperature() {
    // get user input
    const temperatureInput = document.getElementById('temperature').value;
    const selectedUnit = document.getElementById('unit').value;

    // to  validate input
    if (!temperatureInput || isNaN(temperatureInput)) {
        alert('Please enter a valid number for temperature.');
        return;
    }

    // to  convert temperature
    let convertedTemperature;
    if (selectedUnit === 'celsius') {
        convertedTemperature = (parseFloat(temperatureInput) * 9/5) + 32;
    } else {
        convertedTemperature = (parseFloat(temperatureInput) - 32) * 5/9;
    }

    // display the result
    const resultElement = document.getElementById('result');
    resultElement.innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${selectedUnit.toLowerCase()}`;
}
