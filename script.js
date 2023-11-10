function convertTemperature() {

    var celsiusInput = document.getElementById("celsius");
    var celsiusValue = parseFloat(celsiusInput.value);

    
    if (!isNaN(celsiusValue)) {
        
        var fahrenheitValue = (celsiusValue * 9/5) + 32;

        
        var fahrenheitInput = document.getElementById("fahrenheit");
        fahrenheitInput.value = fahrenheitValue.toFixed(2);
    } else {
        
        alert("Please enter a valid number for Celsius temperature.");
    }
}
