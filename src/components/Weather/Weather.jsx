import axios from "axios";
import React, { useEffect, useState } from "react";
import { useGeolocated } from "react-geolocated";

const Weather = () => {
  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function fetchWeatherDaily() {
      if (
        !coords ||
        typeof coords.longitude !== "number" ||
        typeof coords.latitude !== "number"
      ) {
        return;
      }

      try {
        const response = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&daily=temperature_2m_max,precipitation_probability_max,precipitation_sum,windspeed_10m_max&timezone=Europe%2FBerlin`
        );
        setWeather(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching weather", error);
      }
    }

    fetchWeatherDaily();
  }, [coords]);
  return (
    <section className="flex flex-wrap w-full justify-center container mx-auto weather">
      {weather && (
        <>
          <article className="w-full lg:w-1/2 flex rounded-lg bg-auto">
            <div className="rounded-lg p-8 w-full text-zinc-200">
              <header className="mb-20">
                <h2 className="font-bold text-3xl leading-none pb-1">
                  {new Date(weather.daily.time[0]).toLocaleString("en-US", {
                    weekday: "long",
                  })}
                </h2>
                <time className="leading-none pb-2 pl-1">
                  {new Date(weather.daily.time[0]).toLocaleDateString()}
                </time>
              </header>
              <div>
                <strong className="leading-none text-6xl block font-weight-bolder">
                  {weather.daily.temperature_2m_max[0]}ºC
                </strong>
              </div>
            </div>
          </article>

          <aside className="w-full lg:w-1/2 flex ml-0">
            <div className="lg:my-3 text-zinc-200 text-lg p-4 lg:rounded-r-lg w-full">
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

              <div className="flex flex-row gap-2">
                {weather.daily.time.slice(1, 5).map((date, index) => (
                  <div
                    key={date}
                    className="flex flex-col w-1/4 bg-gray-900 rounded-lg"
                  >
                    <div className="text-center pt-2 mb-2"></div>
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
          </aside>
        </>
      )}
    </section>
  );
};

export default Weather;
