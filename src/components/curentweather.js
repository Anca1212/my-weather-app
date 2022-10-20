import React from "react";
import "./curentweather.css";
import Ploaie from "./ploaie"
const CurrentWeather = ({ data }) => {

  const ploaie=()=>{
    console.log("Dateleeee",data);
    // data.list.slice(0, 7);
    // console.log(data.list[nr].main.temp);
    let z =false
    if (data.weather[0].description=="light rain")
    z=true
    if (data.weather[0].description==" rain")
    z=true
    console.log(z)
    if (z==true)
         var ms="Zi cu ploaie"
    return (
      <div>{ms}</div>
    );
    }



  return (
    <div className="weather">
      <div className="top">
      <Ploaie ploaie={ploaie()} />
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>
        
      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp-273)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like-273)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;