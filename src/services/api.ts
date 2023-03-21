import axios from "axios";

export const FetchAPI = axios.create({
  baseURL: `http://api.weatherapi.com/v1/forecast.json?key=${
    import.meta.env.VITE_KEY
  }&q=`,
});
