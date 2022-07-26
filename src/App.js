import React, {useState} from "react";
import axios from "axios";
//import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';
import "./App.css";
import Weather from "./Weather";
import GetTime from "./GetTime";
import GetTemperature from "./GetTemperature";
export default function App() {
  let [city, setCity] = useState("");
  let [location, setLocation] = useState("");
  let [weatherData, setWeatherData]=useState({});

  
  function updateCity(event) {
    setCity(event.target.value);
  }

  function showCity(event) {
    event.preventDefault();
    setLocation(`in ${city}`); 
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f75c6779ae980097755ff7503f54fb9c&units=metric`;
  axios.get(url).then(showTemperature); 
  }

  function showTemperature(response) {

    setWeatherData({
    celcius: Math.round(response.data.main.temp),
    description: response.data.weather[0].description,
    humidity: response.data.main.humidity,
    wind:response.data.wind.speed,
    icon:response.data.weather[0].icon})
  }
  
  let iconUrl = `http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`;
  
  

 if (`${weatherData.celcius}`!==null){
  return (
    <div className="App">
      <h1>Weather {location}</h1>
      <GetTemperature celcius={weatherData.celcius} />
      <div className="Date"> 
          <GetTime />
      </div>
      <br />
      <div> <img src={iconUrl} alt="" /></div>
      
        <div className="weatherToday">
          
          <div>
           
             Description: {weatherData.description}
          </div>
          <div>Wind: {weatherData.wind} km/h</div>
          <div>Humidity: {weatherData.humidity}%</div>
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
  );}

  else{
    
  showTemperature();
}
}
