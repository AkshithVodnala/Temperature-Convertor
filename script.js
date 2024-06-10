function temperatureConverter() {
    // Get the input temperature and selected conversion type
    const inputTemperature = parseFloat(document.getElementById("yy").value);
    const selectTemperature = document.getElementById("ten").value;
    // const selectToConvert = document.getElementById("ten2").value;
    // Initialize variables for the converted temperature and the result element

    const selectToConvert = document.getElementById("ten2").value;
    // const selectedIndex = selectElement.selectedIndex;
    // const selectedOption = selectElement.options[selectedIndex];
    //     const selectedValue = selectedOption.value;

    let convertedTemperature;
    const resultElement = document.getElementById("output");

    // Perform the conversion based on the selected conversion type
    switch (selectTemperature+"-"+selectToConvert) {
        case "cel-cel2":
            convertedTemperature = inputTemperature;
            break;
        case "cel-fah2":
            // Convert to Fahrenheit: °F = (°C × 9/5) + 32
            convertedTemperature = (inputTemperature * 9/5) + 32;
            break;
        case "cel-kel2":
            // Convert to Kelvin: K = °C + 273.15
            convertedTemperature = inputTemperature + 273.15;
            break;
        case "fah-fah2":
            convertedTemperature = inputTemperature;
            break;
        case "fah-cel2":
            convertedTemperature = (inputTemperature-32)/1.8;
                 break;
        case "fah-kel2":
            convertedTemperature =  (5/9 * (inputTemperature - 32)) + 273.15;
            break;
        case "kel-kel2":
            convertedTemperature = inputTemperature;
            break;
        case "kel-cel2":
            convertedTemperature = inputTemperature - 273.15;
            break;
        case "kel-fah2":
            convertedTemperature =  (9/5 * (inputTemperature - 273)) + 32;
            break;
        default:
            convertedTemperature = "Invalid";
    }

    // Display the converted temperature in the result element
    resultElement.value = convertedTemperature.toFixed(2); // Display with 2 decimal places


    
  //  console.log("Selected Index: " + selectedIndex);
    
   //     console.log("Selected Value: " + selectedValue);
}

// Function to reset the form
function reset() {
    document.getElementById("inputTemperature").value = "";
    document.getElementById("selectConversion").value = "cel";
    document.getElementById("output").value = "";
}