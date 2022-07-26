import React, { useState } from "react";

export default function GetTemperature(props) {
  let [temp, setTemp] = useState("Cel");


  function showFah(event) {
    event.preventDefault();
    setTemp("Fah");
   
  }
  function showCel(event) {
    event.preventDefault();
    setTemp("Cel");
  }

  if (temp==="Cel"){
  return (
    <h2>
      {props.celcius}
        °C
      {""} | {""}
      <a href="/" onClick={showFah}>
        °F
      </a>
    </h2>
  );}
  else{
    return (
      <h2>
        <a href="/" onClick={showCel}>
          °C
        </a>
        {""} | {""}
        {Math.round(props.celcius * 1.8 + 32)} 
          °F
      </h2>
    );
  }
}
