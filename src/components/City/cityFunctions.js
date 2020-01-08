export class City {
  constructor(key, cityName, latitude, longitude, population) {
    this.key = key;
    this.cityName = cityName;
    this.latitude = latitude;
    this.longitude = longitude;
    this.population = population;
  }
  show() {
    return `Key: ${this.key}, City Name: ${this.cityName}, Latitude: ${this.latitude}, Longitude: ${this.longitude}, Population: ${this.population}`;
  }
  movedIn(numValue) {
    this.population += numValue;
    // console.log(this.population);
  }
  movedOut(numValue) {
    this.population -= numValue;
    // console.log(this.population);
  }
  howBig() {
    if (this.population >= 1 && this.population <= 100) {
      return "Hamlet";
    }
    if (this.population <= 1000) {
      return "Village";
    }
    if (this.population <= 20000) {
      return "Town";
    }
    if (this.population <= 100000) {
      return "Large Town";
    }
    if (this.population > 100000) {
      return "City";
    }
  }
}

export class Community {
  constructor() {
    this.cityRoster = [];
  }
  createCity(key, cityName, latitude, longitude, population) {
    let newCity = new City(key, cityName, latitude, longitude, population);
    this.cityRoster.push(newCity);
    return this.cityRoster;
  }
  whichSphere(city) {
    if (city.latitude > 0) return "Northern Hemishpere";
    if (city.latitude < 0) return "Southern Hemishpere";
    return "Equator";
  }
  getMostSouthern(cityList) {
    cityList.sort((a, b) => {
      return a.latitude - b.latitude;
    });
    // console.log(cityList[0]);
    return cityList[0];
  }
  getMostNorthern(cityList) {
    cityList.sort((a, b) => {
      return b.latitude - a.latitude;
    });
    // console.log(cityList[0]);
    return cityList[0];
  }
  getPopulation(cityList) {
    let totalPolulation = cityList.reduce((sum, city) => {
      return sum + city.population;
    }, 0);
    // console.log(totalPolulation);
    return totalPolulation;
  }
  deleteCity(cityKey) {
    let newCityRoster = this.cityRoster.filter(city => {
      return city.key !== cityKey;
    });
    this.cityRoster = newCityRoster;
  }
}
