const convertToCelsius = function(fahrenheit) {
  let celsius = 0;
  celsius = (fahrenheit - 32) * (5/9);
  let celsiusRounded = Math.round(celsius * 10) / 10;
  return celsiusRounded;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = 0;
  fahrenheit = celsius * (9 / 5) + 32;
  let roundedFahrenheit = Math.round(fahrenheit * 10) / 10;
  return roundedFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
