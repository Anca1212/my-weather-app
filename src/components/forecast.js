import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css"
import Heading from "./heding";


const WEEK_DAYS = ['Luni', 'Marti' ,'Miercuri','Joi', 'Vineri','Sambata', 'Duminica'  ];




const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
   console.log(forecastDays)

  Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };
  
  const maxim=()=>{
    console.log(data.list);
    // data.list.slice(0, 7);
    // console.log(data.list[nr].main.temp);
    const lista = [];

    for (let step = 0; step < 7; step++) {        

    // if ((data.list[step].main.temp_max)>(data.list[step+1].main.temp_max)
    // )
    lista.push(data.list[step].main.temp);
    console.log(" Lista temperatura", lista)

    // var temp=data.list[step].main.temp_max-273
    var t_max=lista.max()}
    return (
      <div>{Math.round(t_max-273)}</div>
    );
    }





    




// var z=r(dayInAWeek)


  return (
    <>
      <label className="title">Urmatoarea saptamana:</label>



      
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
                     

          <AccordionItem key={idx}>
               
            <AccordionItemHeading>
              
              <AccordionItemButton>
                <div className="daily-item">
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">{item.weather[0].description}</label>
                  <label className="min-max">{Math.round(item.main.temp-273)}°C /{Math.round(item.main.temp_min-273)}°C</label>
                  
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>

              
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Pressure:</label>
                  <label>{item.main.pressure}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity:</label>
                  <label>{item.main.humidity}</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Clouds:</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind speed:</label>
                  <label>{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Sea level:</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Feels like:</label>
                  <label>{item.main.feels_like}°C</label>
                </div>
              </div>
              
            </AccordionItemPanel>
         
          </AccordionItem>
          
        ))}
       
      </Accordion>
      <Heading temp={maxim()} />
    </>
    
  );
};

export default Forecast;