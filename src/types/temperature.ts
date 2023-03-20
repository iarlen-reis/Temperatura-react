export interface TemperatureProps {
  error: boolean;
  location: {
    name: string,
    region: string,
    country: string,
  };
  current: {
    humidity: number,
    temp_c: number,
    wind_kph: number,
    cloud: number,
  };
  forecast: {
    forecastday: {
      0: {
        day: {
          maxtemp_c: number,
          mintemp_c: number,
        },
      },
    },
  };
}
