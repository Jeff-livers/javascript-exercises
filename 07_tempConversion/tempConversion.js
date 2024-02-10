const convertToCelsius = function(far) {
  let cel = 5 / 9 * (far - 32);
  return (Math.round(cel * 10) / 10)
};

const convertToFahrenheit = function(cel) {
  far = (9 / 5 * cel) + 32;
  return (Math.round(far * 10) / 10)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
