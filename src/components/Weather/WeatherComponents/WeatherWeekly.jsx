import React from "react";

const WeatherWeekly = ({ weather }) => {
  return (
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
  );
};

export default WeatherWeekly;
