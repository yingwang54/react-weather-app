import React, { useState } from "react";

export default function GetTemperature(props) {
  let [fah, setFah] = useState("");
  let [cel, setCel] = useState(props.celcius);

  function showFah(event) {
    event.preventDefault();
    setFah(Math.round(props.celcius * 1.8 + 32));
    setCel("");
  }
  function showCel(event) {
    event.preventDefault();
    setFah("");
  }
  return (
    <h2>
      {props.celcius}
      <a href="/" onClick={showCel}>
        °C
      </a>
      {""} | {""}
      {fah}
      <a href="/" onClick={showFah}>
        °F
      </a>
    </h2>
  );
}
