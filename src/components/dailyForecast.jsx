import React from 'react'
import { useContext } from 'react'

import Weather_icon from './Weather_icon'

import WeatherContext from '../context/weatherContex'
const dailyForecast = ({data}) => {

    const {units}=useContext(WeatherContext)

  const { day:date,  summary, temperature_max,temperature_min
    ,  wind, icon } = data

   
const now_date={
  day:new Intl.DateTimeFormat(navigator,{
weekday:"short",
month:"2-digit",
day:"2-digit"
  }).format(new Date())
}
const weather_day={
  day:new Intl.DateTimeFormat(navigator,{
weekday:"short",
month:"2-digit",
day:"2-digit"
  }).format(new Date(date))
}
weather_day.day=now_date.day===weather_day.day?"Today":weather_day.day


  return (    
 
   <div className="widget">
      <div className="day">{weather_day.day}</div>
    
      <div className="icon">
        <Weather_icon iconNumber={icon} summary={summary} />
      </div>
      <div className="temperature">
        <div className='min'>
        {Math.round(temperature_min)} {units.temperature}

        </div>
         <div className='max'>
        {Math.round(temperature_max)} {units.temperature}

        </div>
      </div>
     
      <div className="wind">
        <div className="speed">{Math.round(wind.speed)} {units.wind_speed}</div>
        <div className="dir" style={{ transform: `rotate(${-45 + wind.angel}deg)` }}>
          <i className='bi bi-send-fill'></i>

        </div>
      </div>

    </div>
  )
}

export default dailyForecast
