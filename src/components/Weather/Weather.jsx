import axios from "axios";
import React, { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState("");

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await axios.get(
          "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,precipitation_probability_max,windspeed_10m_max&timezone=Europe%2FBerlin"
        );
        setWeather(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching weather", error);
      }
    }

    console.log(fetchWeather());
  }, []);
  return (
    <div className="w-full justify-center container mx-auto weather">
      <div className="flex flex-wrap w-full lg:w-auto">
        <div className="w-full lg:w-1/2 flex rounded-lg bg-auto">
          <div className="rounded-lg py-6 pl-8 pr-32 w-full text-zinc-200">
            <div className="mb-20">
              <h2 className="font-bold text-3xl leading-none pb-1">Tuesday</h2>
              <h3 className="leading-none pb-2 pl-1">15 Jan 19</h3>
            </div>
            <div>
              <strong className="leading-none text-6xl block font-weight-bolder">
                29ºC
              </strong>
              <b className="text-2xl block font-bold">Sunny</b>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex ml-0">
          <div className="lg:my-3 text-zinc-200 text-lg p-4 lg:rounded-r-lg w-full ">
            <div className="flex justify-between mb-4 w-full">
              <div className="w-auto font-bold uppercase text-90">
                Precipitation
              </div>
              <div className="w-auto text-right">10 %</div>
            </div>
            <div className="flex justify-between mb-4 w-full">
              <div className="w-auto font-bold uppercase text-90">Humidity</div>
              <div className="w-auto text-right">29 %</div>
            </div>
            <div className="flex justify-between mb-8 w-full">
              <div className="w-auto font-bold uppercase text-90">Wind</div>
              <div className="w-auto text-right">12 Mph</div>
            </div>
            <div className="flex flex-row gap-2">
              <div className="flex flex-col w-1/4 bg-gray-100 text-black rounded-lg pb-4">
                <div className="text-center pt-2 mb-2"></div>
                <div className="text-center">
                  <b className="font-normal">Tue</b>
                  <br />
                  <strong className="text-xl">29ºC</strong>
                </div>
              </div>

              <div className="flex flex-col w-1/4 bg-gray-900 rounded-lg">
                <div className="text-center pt-2 mb-2"></div>
                <div className="text-center">
                  <b className="font-normal">Wed</b>
                  <br />
                  <strong className="text-xl">21ºC</strong>
                </div>
              </div>
              <div className="flex flex-col w-1/4 bg-gray-900 rounded-lg">
                <div className="text-center pt-2 mb-2"></div>
                <div className="text-center">
                  <b className="font-normal">Thu</b>
                  <br />
                  <strong className="text-xl">18ºC</strong>
                </div>
              </div>
              <div className="flex flex-col w-1/4 bg-gray-900 rounded-lg">
                <div className="text-center pt-2 mb-2"></div>
                <div className="text-center">
                  <b className="font-normal">Fri</b>
                  <br />
                  <strong className="text-xl">25ºC</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
