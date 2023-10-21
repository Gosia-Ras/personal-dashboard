import axios from "axios";
import React, { useEffect, useState } from "react";

const locations = [
  { name: "New York", latitude: 40.7128, longitude: -74.006 },
  { name: "London", latitude: 51.5074, longitude: -0.1278 },
  { name: "Tokyo", latitude: 35.6895, longitude: 139.6917 },
  { name: "Paris", latitude: 48.8566, longitude: 2.3522 },
  { name: "Los Angeles", latitude: 34.0522, longitude: -118.2437 },
  { name: "Rome", latitude: 41.9028, longitude: 12.4964 },
  { name: "Sydney", latitude: -33.8688, longitude: 151.2093 },
  { name: "Moscow", latitude: 55.7558, longitude: 37.6176 },
  { name: "Dubai", latitude: 25.276987, longitude: 55.296249 },
  { name: "Berlin", latitude: 52.52, longitude: 13.405 },
  { name: "Beijing", latitude: 39.9042, longitude: 116.4074 },
  { name: "Cairo", latitude: 30.0444, longitude: 31.2357 },
  { name: "São Paulo", latitude: -23.5505, longitude: -46.6333 },
  { name: "Singapore", latitude: 1.3521, longitude: 103.8198 },
  { name: "Toronto", latitude: 43.65107, longitude: -79.347015 },
  { name: "Istanbul", latitude: 41.0082, longitude: 28.9784 },
  { name: "Seoul", latitude: 37.5665, longitude: 126.978 },
  { name: "Mumbai", latitude: 19.076, longitude: 72.8777 },
  { name: "Mexico City", latitude: 19.4326, longitude: -99.1332 },
  { name: "Lagos", latitude: 6.5244, longitude: 3.3792 },
];

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
    <section className="w-full containerb mx-auto">
      <h2 className="font-bold mb-5 text-3xl leading-none pb-1">Weather</h2>
      <div className="flex flex-wrap flex-col weather">
        <select
          onChange={handleLocationChange}
          className="bg-slate-800 p-5"
          id="location-select"
        >
          <option value="">Select a location</option>
          {locations.map((loc, index) => (
            <option key={index} value={loc.name}>
              {loc.name}
            </option>
          ))}
        </select>

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
