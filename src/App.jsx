import Search from "./components/Search";
import Weather from "./components/Weather";
import WeatherForcast from "./components/WeatherForcast";
import WeatherShimmer from "./components/WeatherShimmer";
import WeatherForcastShimmer from "./components/WeatherForcastShimmer";
import "react-loading-skeleton/dist/skeleton.css";

import { WEATHER_API, WEATHER_API_KEY } from "./api";
import { useState } from "react";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forcast, setForcast] = useState(null);
  console.log(forcast);

  const handleOnSearchChange = async (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const weatherData = await fetch(
      `${WEATHER_API}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forcastData = await fetch(
      `${WEATHER_API}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([weatherData, forcastData])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForcast({ city: searchData.label, ...forcastResponse });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="mx-auto">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather ? <Weather data={currentWeather} /> : <WeatherShimmer />}
      {forcast ? (
        <WeatherForcast data={forcast} />
      ) : (
        <WeatherForcastShimmer />
      )}
    </div>
  );
}

export default App;
