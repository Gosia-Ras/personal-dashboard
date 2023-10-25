import axios from "axios";
import React, { useEffect, useState } from "react";
import { locations } from "./utilities/locations";
import LocationSelect from "./LocationSelect";

const Weather = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [weather, setWeather] = useState(null);

  const handleLocationChange = (e) => {
    const selectedLocationName = e.target.value;
    const location = locations.find((loc) => loc.name === selectedLocationName);
    if (location) {
      setSelectedLocation(location);
    }
  };

  useEffect(() => {
    async function fetchWeather() {
      if (selectedLocation) {
        try {
          const response = await axios.get(
            `https://api.open-meteo.com/v1/forecast?latitude=${selectedLocation.latitude}&longitude=${selectedLocation.longitude}&daily=temperature_2m_max,precipitation_probability_max,precipitation_sum,windspeed_10m_max&timezone=auto`
          );
          setWeather(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching weather", error);
        }
      }
    }

    fetchWeather();
  }, [selectedLocation]);
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
          <>
            <article className="rounded-lg p-8 w-full text-zinc-200 flex flex-row justify-between">
              <header>
                <h3 className="font-bold text-3xl leading-none pb-1">
                  {new Date(weather.daily.time[0]).toLocaleString("en-US", {
                    weekday: "long",
                  })}
                </h3>
                <time className="leading-none pb-2 pl-1">
                  {new Date(weather.daily.time[0]).toLocaleDateString()}
                </time>
              </header>
              <div>
                <strong className="leading-none text-6xl block font-weight-bolder">
                  {weather.daily.temperature_2m_max[0]}ºC
                </strong>
              </div>
            </article>

            <article className="w-full flex ml-0 p-8">
              <div className="lg:my-3 text-zinc-200 text-lg lg:rounded-r-lg w-full">
                <dl>
                  <div className="flex justify-between mb-4 w-full">
                    <dt className="w-auto font-bold uppercase text-90">
                      Precipitation
                    </dt>
                    <dd className="w-auto text-right">
                      {weather.daily.precipitation_probability_max[0]} %
                    </dd>
                  </div>
                  <div className="flex justify-between mb-4 w-full">
                    <dt className="w-auto font-bold uppercase text-90">
                      Precipitation Sum
                    </dt>
                    <dd className="w-auto text-right">
                      {weather.daily.precipitation_sum[0]}mm
                    </dd>
                  </div>
                  <div className="flex justify-between mb-4 w-full">
                    <dt className="w-auto font-bold uppercase text-90">
                      Wind Speed
                    </dt>
                    <dd className="w-auto text-right">
                      {weather.daily.windspeed_10m_max[0]}km/h
                    </dd>
                  </div>
                </dl>

                <div className="lg:flex lg:flex-row grid grid-cols-2 gap-2">
                  {weather.daily.time.slice(1, 7).map((date, index) => (
                    <div
                      key={date}
                      className="flex flex-col lg:w-1/4 w-full bg-slate-800 rounded-lg p-3 place-content-center"
                    >
                      <div className="text-center">
                        <b className="font-normal">
                          {new Date(date).toLocaleString("en-US", {
                            weekday: "short",
                          })}
                        </b>
                        <br />
                        <strong className="text-xl">
                          {weather.daily.temperature_2m_max[index]}ºC
                        </strong>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </>
        )}
      </div>
    </section>
  );
};

export default Weather;
