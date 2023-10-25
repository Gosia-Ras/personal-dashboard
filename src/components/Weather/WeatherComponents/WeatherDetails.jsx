const WeatherDetails = ({ weather }) => {
  return (
    <dl>
      <div className="flex gap-5 mb-4 w-full">
        <dt className="w-auto font-bold uppercase">Precipitation</dt>
        <dd className="w-auto text-right">
          {weather.daily.precipitation_probability_max[0]} %
        </dd>
      </div>
      <div className="flex gap-5 mb-4 w-full">
        <dt className="w-auto font-bold uppercase">Precipitation Sum</dt>
        <dd className="w-auto text-right">
          {weather.daily.precipitation_sum[0]}mm
        </dd>
      </div>
      <div className="flex gap-5 mb-4 w-full">
        <dt className="w-auto font-bold uppercase">Wind Speed</dt>
        <dd className="w-auto text-right">
          {weather.daily.windspeed_10m_max[0]}km/h
        </dd>
      </div>
    </dl>
  );
};

export default WeatherDetails;
