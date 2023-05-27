function getTemperatureForCity(cityName) {
  const cache = {};

  return function (cityName) {
    if (cache[cityName]) {
      console.log("Retrieved from cache ");
      return cache[cityName];
    } else {
      let tempData = temperatureData[cityName];
      cache[cityName] = tempData;
      console.log("Retrieved by computation ");
      return cache[cityName];
    }
  };
}

const temperatureData = {
  "New York": 20,
  London: 18,
  Paris: 22,
  Tokyo: 25,
  Sydney: 28,
};

const getTemperature = getTemperatureForCity();

console.log(getTemperature("New York")); // 20
console.log(getTemperature("New York")); // 20 (retrieved from cache)
console.log(getTemperature("London")); // 18
console.log(getTemperature("London")); // 18 (retrieved from cache)
