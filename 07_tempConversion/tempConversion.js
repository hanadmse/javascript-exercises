const convertToCelsius = function(fahrenheit) {
  const celsius = (5/9) * (fahrenheit - 32);
  if (!Number.isInteger(celsius)) {
    return parseFloat(celsius.toFixed(1));
  }
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  const fahrenheit = celsius * (9/5) + 32;
  if (!Number.isInteger(fahrenheit)) {
    return parseFloat(fahrenheit.toFixed(1));
  }
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
