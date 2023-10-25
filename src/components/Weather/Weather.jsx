import React, { useState } from "react";
import LocationSelect from "./WeatherComponents/LocationSelect";
import WeatherWeekly from "./WeatherComponents/WeatherWeekly";
import WeatherDetails from "./WeatherComponents/WeatherDetails";
import WeatherHeader from "./WeatherComponents/WeatherHeader";
import { useWeatherData } from "./useWeatherData";

const Weather = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const weather = useWeatherData(selectedLocation);

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  return (
    <section className="w-full containerb mx-auto p-2">
      <h2 className="font-bold mb-5 text-3xl leading-none pb-1">Weather</h2>
      <details className="mb-3">
        <summary>Details</summary>
        <code>
          I want to keep this project API Key free, which is why you can only
          pick locations from this list - sorry 😔
        </code>
      </details>
      <div className="flex flex-wrap flex-col weather">
        <LocationSelect handleLocationChange={handleLocationChange} />

        {weather && (
          <article className="rounded-lg p-8 w-full text-zinc-200 flex flex-col gap-5">
            <WeatherHeader weather={weather} />
            <WeatherDetails weather={weather} />
            <WeatherWeekly weather={weather} />
          </article>
        )}
      </div>
    </section>
  );
};

export default Weather;
