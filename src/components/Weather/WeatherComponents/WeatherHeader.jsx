const WeatherHeader = ({ weather }) => {
  return (
    <header>
      <h3 className="font-bold text-3xl leading-none pb-1">
        {new Date(weather.daily.time[0]).toLocaleString("en-US", {
          weekday: "long",
        })}
      </h3>
      <time className="leading-none pb-2 pl-1">
        {new Date(weather.daily.time[0]).toLocaleDateString()}
      </time>
      <strong className="leading-none text-6xl block font-weight-bolder mt-5">
        {weather.daily.temperature_2m_max[0]}ºC
      </strong>
    </header>
  );
};

export default WeatherHeader;
