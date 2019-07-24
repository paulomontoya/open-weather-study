import { observable } from "mobx";
import axios from "axios";

export const WeatherStore = observable({
  isLoading: false,
  searchTerms: null,
  error: false,
  currentCity: null,
  list: [],

  getCities: () => {
    if (!WeatherStore.searchTerms) {
      WeatherStore.isLoading = false;
      WeatherStore.error = false;
      WeatherStore.currentCity = null;
      WeatherStore.list = [];
    } else {
      WeatherStore.isLoading = true;

      const url = "https://api.openweathermap.org/data/2.5/forecast/daily";
      axios
        .get(url, {
          params: {
            q: WeatherStore.searchTerms,
            units: "metric",
            APPID: "e3e26caca98c8d04492faf892fdfcb91",
            cnt: 7
          }
        })
        .then(response => {
          WeatherStore.isLoading = false;
          WeatherStore.error = false;
          WeatherStore.currentCity = response.data.city.name;
          WeatherStore.list = response.data.list;
        })
        .catch(error => {
          WeatherStore.isLoading = false;
          WeatherStore.error = error.response.status;
          WeatherStore.currentCity = null;
          WeatherStore.list = [];
        });
    }
  }
});
