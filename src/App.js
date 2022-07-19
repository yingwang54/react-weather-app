import React, {useState} from "react";
import axios from "axios";
import "./App.css";
import Weather from "./Weather";
import GetTemperature from "./GetTemperature";
export default function App() {

  let [city, setCity] = useState("");
  let [location, setLocation] = useState("");
  let [celcius, setCelcius] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");

  let now = new Date();
  let date = now.getDate();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${now.getMinutes()}`;
  }
  let months = now.getMonth() + 1;
  let year = now.getFullYear();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[now.getDay()];

  function updateCity(event) {
    setCity(event.target.value);
  }
  function showTemperature(response) {
    setCelcius(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
  }

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f75c6779ae980097755ff7503f54fb9c&units=metric`;
  let iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

   function showCity(event) {
    event.preventDefault();
    setLocation(`in ${city}`);
    axios.get(url).then(showTemperature);
  }
  
  return (
    <div className="App">
      <h1>Weather {location}</h1>
     
      <GetTemperature celcius={celcius} />
      <div className="Date">
        <h3>
          {date}-{months}-{year} ({day}) {hours}:{minutes}
        </h3>
      </div>
      <br />
      <div> <img src={iconUrl} alt="" /></div>
      
        <div className="weatherToday">
          <div className="weatherDescription">
             Description: {description}
          </div>
          <div>Wind: {wind} km/h</div>
          <div>Humidity: {humidity}%</div>
        </div>
       
      
      <form onSubmit={showCity}>
        <input
          type="search"
          placeholder="Enter a city..."
          className="col-8 rounded shadow p-2 m-2"
          onChange={updateCity}
        />
        <input type="submit" value="Search" className="col-3 rounded shadow p-2 m-2" onClick={showCity} />
      </form>
        
        <div className="Date">
          <br />
          <h3><strong>Weather in next five days</strong></h3>
          <br/>
          <Weather />
        </div>
        <p><a href="https://github.com/yingwang54/react-weather-app" target="_blank" rel="noreferrer">Open source</a> by Ying Wang</p>
        </div>
  );
}
