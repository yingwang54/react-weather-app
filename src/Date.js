import React from "react";

export default function Date() {
    let now = new Date();
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
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
  
    return (
      <div className="Date">
        <h2>
          {date}-{months}-{year} {day}
        </h2>
        <h2>
          {hours}:{minutes}
        </h2>
      </div>
    );
  }