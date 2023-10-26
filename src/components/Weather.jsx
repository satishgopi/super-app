import React, { useEffect, useState } from "react";
import "../assets/css/weather.css";
import rain from "../assets/img/ic-heavy-rain.svg";
// import clear from "../assets/img/ic-clear.png";
import wind from "../assets/img/ic-wind.svg";
import pressure from "../assets/img/ic-pressure.svg";
import humidiy from "../assets/img/ic-humidiy.svg";

const Weather = () => {
  const [error, setError] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [weatherIcon, setWeatherIcon] = useState(null);
  const [weatherName, setWeatherName] = useState("Loading");

  const weatherIcons = {
    "01d": "//cdn.weatherapi.com/weather/64x64/day/113.png",
    "02d": "//cdn.weatherapi.com/weather/64x64/day/116.png",
    "03d": "//cdn.weatherapi.com/weather/64x64/day/119.png",
    "04d": "//cdn.weatherapi.com/weather/64x64/day/122.png",
    "09d": "//cdn.weatherapi.com/weather/64x64/day/302.png",
    "10d": "//cdn.weatherapi.com/weather/64x64/day/308.png",
    "11d": "//cdn.weatherapi.com/weather/64x64/day/389.png",
    "13d": "//cdn.weatherapi.com/weather/64x64/day/329.png",
    "50d": "//cdn.weatherapi.com/weather/64x64/day/143.png",
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherData(latitude, longitude);
        },
        (error) => {
          setError("Error accessing geolocation.");
        }
      );
    } else {
      setError("Geolocation not supported.");
    }
  }, []);

  useEffect(() => {
    if (weatherData) {
      const conditionCode = weatherData.weather[0].icon;
      setWeatherIcon(weatherIcons[conditionCode] || rain);
      setWeatherName(weatherData.weather[0].main);
    }
  }, [weatherData]);

  const fetchWeatherData = async (latitude, longitude) => {
    const apiKey = "032746e4b0065fad45bd3bc1012341bd";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Weather data not available.");
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError(error.message);
    }
  };

  let newDate = new Date();
  let date =
    newDate.getDate() +
    "-" +
    (newDate.getMonth() + 1) +
    "-" +
    newDate.getFullYear();
  let showTime = newDate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <div className="weather-box">
      <div className="date">
        <h1>{date}</h1>
        <h1>{showTime}</h1>
      </div>
      <div className="weather-report">
        <div className="weather-big-icon">
          <img src={weatherIcon} alt="" />
          <h1>{weatherName}</h1>
        </div>
        <div className="line"></div>
        <div className="weather-txt">
          <h1>
            {weatherData ? `${Math.floor(weatherData.main.temp)}°C` : "Loading"}
          </h1>
          {weatherData && (
            <div className="d-flex-weather">
              <img src={pressure} alt="" />
              <div>
                <h1>{weatherData.main.pressure} mbar</h1>
                <p>Pressure</p>
              </div>
            </div>
          )}
        </div>
        <div className="line"></div>
        <div className="">
          {weatherData && (
            <div className="d-flex-weather mb-3">
              <img src={wind} alt="" />
              <div>
                <h1>{weatherData.wind.speed} km/h</h1>
                <p>Wind</p>
              </div>
            </div>
          )}
          {weatherData && (
            <div className="d-flex-weather">
              <img src={humidiy} alt="" />
              <div>
                <h1>{weatherData.main.humidity}%</h1>
                <p>Humidity</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
