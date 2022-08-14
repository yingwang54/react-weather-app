import React from "react";

export default function GetTime(){
    let now = new Date();
  let date = now.getDate();
  if (date <10){
    date = `0${now.getDate()+1}`;
  }
  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${now.getMinutes()}`;
  }

  if (hours < 10) {
    hours = `0${now.getHours()}`;
  }
  let months = now.getMonth() + 1;
  if (months <10){
    months = `0${now.getMonth() + 1}`;
  }
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

    return(<h3>{date}-{months}-{year} ({day}) {hours}:{minutes}</h3>);
}