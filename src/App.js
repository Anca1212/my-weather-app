import React, { useState } from 'react'
import Search from "./components/search";
import CurrentWeather from "./components/curentweather";
import "./App.css";
import Forecast from './components/forecast';


function App() {



  
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  
  const [inputText, setText] = useState('hello'); 

 
  
  const x = (value) => {
    // const value = "London"
    const currentWeatherFetch = fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=c20e15014efa3850950b9be498d49722`
    );
    Promise.all([currentWeatherFetch])
    .then(async (response) => {
      const weatherResponse = await response[0].json();

      setCurrentWeather({ city: value, ...weatherResponse });
    })
    .catch(console.log);
};
var y=x("London");

  const handleOnSearchChange = (searchData) => {
    const value = searchData.value.split(" ");
    const currentWeatherFetch = fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=c20e15014efa3850950b9be498d49722`
    );
    const forecastFetch = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=c20e15014efa3850950b9be498d49722`
    );
    
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch(console.log);
  };
  return (
    <div className="container">
    
    <Search onSearchChange={handleOnSearchChange} />
    
    
    {/* <div className='test'>
    <button onclick="< onSearchChange={x}/>" >Click me</button> */}

      
      {currentWeather && <CurrentWeather data={currentWeather} />}
    {forecast && <Forecast data={forecast} />}
     </div> 
    //  </div>
  )
 
}




export default App;