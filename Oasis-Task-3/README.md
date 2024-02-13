
## Temparature Converter - (TASK-3)

![Oasis Task-3](https://i.ibb.co/1QFCYNf/Screenshot-2024-02-13-111026.png)


## Temperature Conversion Function

This is a simple web application for converting temperatures between Celsius, Fahrenheit, and Kelvin. It takes input from the user, validates it, and performs the conversion based on the selected unit.

### Technologies Used
HTML
CSS
JavaScript

### Parameters

- degree-input: Represents the input field where the user enters the temperature value.
- typeInput: Represents the dropdown menu or select element where the user chooses the unit of temperature.


### Conversion Logic

- For Celsius to Fahrenheit: (Celsius * 9 / 5) + 32
- For Fahrenheit to Celsius: (Fahrenheit - 32) * 5 / 9
- For Kelvin to Celsius: Kelvin - 273.15


### Error Handling

If the user enters a non-numeric value, the function displays an alert message asking the user to enter a valid temperature.


### Output

The converted temperature, along with its unit (Fahrenheit or Celsius), is displayed in a designated span element on the webpage.


### Usage

To use the convertTemperature function, call it when the user clicks a button or triggers an event in the HTML document.