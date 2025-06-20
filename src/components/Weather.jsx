import React, { useEffect, useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";

const API_KEY = "bfe643b0a16c87d371756b003834b17b";

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setWeatherData(null);
        setError("");
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        setWeatherData(res.data);
      } catch (err) {
        setError("City not found or API error.");
        console.error("Error fetching weather data:", err);
      }
    };

    if (city) fetchWeather();
  }, [city]);

  if (error) return <p>{error}</p>;
  if (!weatherData) return <p>Loading weather data...</p>;

  const iconCode = weatherData.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="weather-wrapper">
      <div className="weather-card">
        <h2>{weatherData.name}</h2>
        <img src={iconUrl} alt="weather icon" />
        <p>🌡️ Temperature: {weatherData.main.temp}°C</p>
        <p>☁️ Condition: {weatherData.weather[0].main}</p>
        <p>💨 Wind: {weatherData.wind.speed} m/s</p>
        <p>🌇 Humidity: {weatherData.main.humidity}%</p>
      </div>
      <Forecast city={city} />
    </div>
  );
};

export default Weather;
