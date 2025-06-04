"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Card from "./Card";
import Gif from "./Gif";
import Citynotfound from "./Citynotfound";
function Input() {
  const [city, setCity] = useState("");
  let [weatherData, setWeatherData] = useState({});
  const [opacity, setOpacity] = useState(0);
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API;
  function getWheatherData() {
    if (!city) return;
    // setOpacity(0);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((res) => {
        console.log(res);

        setWeatherData(res);
        console.log("data", weatherData);

        setCity("");
        setOpacity(0);
        // console.log(`Temperature in ${city}: ${data.main.temp}°C`);
        // console.log(`Weather: ${data.weather[0].description}`);
      })
      .catch((error) => console.error("Error:", error));
  }
  function handleInput(e) {
    setCity(e.target.value);
    setWeatherData({});
  }
  useEffect(() => {
    if (weatherData) {
      const timer = setTimeout(() => setOpacity(1), 100);
      return () => clearTimeout(timer);
    } else {
      setOpacity(0);
    }
  }, [weatherData]);
  return (
    <>
      <div className="my-20 flex flex-col items-center gap-10">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-pink-800 via-purple-700 to-red-400 bg-clip-text text-transparent items-start">
          SkyScope
        </h1>
        <div className="flex  items-center justify-center gap-2">
          <div>
            <input
              type="text"
              placeholder="Enter City Name"
              value={city}
              onChange={(e) => handleInput(e)}
              className="border border-black px-10 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg mx-auto text-center"
            />
          </div>
          <div>
            <button
              onClick={() => getWheatherData()}
              className="bg-blue-300 px-2 py-2 border border-b-blue-700 rounded-xl hover:bg-blue-400 "
            >
              <Image
                src="./searchicon.png"
                alt="Search"
                width="30"
                height="30"
                className=""
              />
            </button>
          </div>
        </div>
        <div
          style={{
            opacity: opacity,
            transition: "opacity 0.5s ease-out",
          }}
        >
          {weatherData != {} && weatherData.cod === 200 ? (
            <Card data={weatherData} />
          ) : weatherData.cod === "404" ? (
            <Citynotfound />
          ) : (
            <Gif />
          )}
        </div>
      </div>
    </>
  );
}
export default Input;
