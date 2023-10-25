// hooks/useWeatherData.js

import { useState, useEffect } from "react";
import axios from "axios";
import { locations } from "./utilities/locations";

export const useWeatherData = (selectedLocationName) => {
  const [weather, setWeather] = useState(null);
  const location = locations.find((loc) => loc.name === selectedLocationName);

  useEffect(() => {
    async function fetchWeather() {
      if (location) {
        try {
          const response = await axios.get(
            `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&daily=temperature_2m_max,precipitation_probability_max,precipitation_sum,windspeed_10m_max&timezone=auto`
          );
          setWeather(response.data);
        } catch (error) {
          console.error("Error fetching weather", error);
        }
      }
    }

    fetchWeather();
  }, [location]);

  return weather;
};
