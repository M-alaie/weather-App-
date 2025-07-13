import React from 'react'
import "../assets/style/components/Forecast.scss"
import HourlyForecast from "./HourlyForecast"
import DailyForecast from "./dailyForecast"
import HorizoTallyScroolable from "./HorizoTallyScroolable"


const Forcast = ({ type, title, data }) => {
  return (
    <div className='Forecast'>
      <div className="forecast-container">
        <h3>{title}</h3>
        <HorizoTallyScroolable className="widget-container">
          {data.map((singleData) => (
            <div>
              {type==="Hourly" ?
              (<HourlyForecast data={singleData}/>)
              :
                (<DailyForecast data={singleData}/>)
              
              }
            </div>
          ))}
        </HorizoTallyScroolable>
      </div>


    </div>
  )
}

export default Forcast
