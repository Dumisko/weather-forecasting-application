/*

import React, { useState } from "react";
import Weather from "./components/Weather";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [submittedCity, setSubmittedCity] = useState("");

  const handleSearch = () => {
    if (city.trim() !== "") {
      setSubmittedCity(city);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="App">
      <h1>🌤️ Weather App</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {submittedCity && <Weather city={submittedCity} />}
    </div>
  );
}

export default App;

*/

// in the written code below the default city is set to kolkata


import React, { useState, useEffect } from "react";
import Weather from "./components/Weather";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [submittedCity, setSubmittedCity] = useState("Kolkata"); // Default city

  const handleSearch = () => {
    if (city.trim() !== "") {
      setSubmittedCity(city);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Optionally, auto-fill the input with default city on first load
  useEffect(() => {
    setCity("Kolkata");
  }, []);

  return (
    <div className="App">
      <h1>🌤️ Weather App</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {submittedCity && <Weather city={submittedCity} />}
    </div>
  );
}

export default App;
