import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "bfe643b0a16c87d371756b003834b17b";

const Forecast = ({ city }) => {
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = res.data.list;

        // Filter one forecast per day (around 12:00 PM)
        const dailyData = data.filter((item) => item.dt_txt.includes("12:00:00"));
        setForecast(dailyData);
      } catch (err) {
        setError("Error fetching forecast data.");
        console.error(err);
      }
    };

    if (city) fetchForecast();
  }, [city]);

  if (error) return <p>{error}</p>;
  if (!forecast.length) return <p>Loading forecast...</p>;

  return (
    <div className="forecast-container">
      <h3>5-Day Forecast</h3>
      <div className="forecast-cards">
        {forecast.map((day, index) => (
          <div key={index} className="forecast-card">
            <p><strong>{new Date(day.dt_txt).toDateString()}</strong></p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt="weather icon"
            />
            <p>{day.weather[0].main}</p>
            <p>{day.main.temp}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
