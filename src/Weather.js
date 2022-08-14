import React, {useState} from 'react';

import './Weather.css';
import axios from 'axios';
export default function Weather(props) {
let lon=props.lon;
let lat=props.lat;
let [temp, setTemp]=useState("");
let now = new Date();
let days = [
  "Sun.",
  "Mon.",
  "Tue.",
  "Wed.",
  "Thu.",
  "Fri.",
  "Sat."
];
let day = days[now.getDay()+1];
  let url=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=5f472b7acba333cd8a035ea85a0d4d4c&units=metric`;
  axios.get(url).then(showTemp); 


function showTemp(response){setTemp({
max:Math.round(response.data.daily[0].temp.max),
min:Math.round(response.data.daily[0].temp.min),
icon: response.data.daily[0].weather[0].icon})
}

let iconUrl = `http://openweathermap.org/img/wn/${temp.icon}@2x.png`;

if (`${temp.max}`!==null){
  return (
<div className="row">
  <div className="col">
        <div className="forecast">{day}</div>
<div className="weatherIcon"><img src={iconUrl} alt="" /></div>
        <div className="forecast">{temp.max}°C | {temp.min}°C </div>
     </div></div>
  );}

  else{
    showTemp();
  }
}
