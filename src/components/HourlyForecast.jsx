import React, { useContext } from 'react'

import Weather_icon from './Weather_icon'

import WeatherContext from '../context/weatherContex'

const HourlyForecast = ({ data }) => {
  const { date, feels_like, summary, temperature, precipitation
    , uv_index, visibility, wind, icon } = data
    // console.log(data);

    const {units}=useContext(WeatherContext)
    

  const now_date = {
    day: new Intl.DateTimeFormat(navigator, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit"
    }
    ).format(new Date()),
    time: new Intl.DateTimeFormat(navigator, {
      hour: "2-digit",
      minute: "2-digit"
    }).format(new Date(date).setMinutes(0))
  }
  const weather_day = {
    day: new Intl.DateTimeFormat(navigator, {
      weekday: "short",
      day: "2-digit",
      month: "2-digit"
    }
    ).format(new Date(date)),
    time: new Intl.DateTimeFormat(navigator, {
      hour: "2-digit",
      minute: "2-digit"
    }).format(new Date(date).setMinutes(0))
  }

  weather_day.day = weather_day.day === now_date.day && weather_day.time === now_date.time ? "Today" :weather_day.time==="00:00"?"" :weather_day.day
   
  //  console.log(now_date.day,weather_day.day);

   


  return (
    <div className="widget">
      <div className="day">{weather_day.day}</div>
      <div className="time">{weather_day.time}</div>
      <div className="icon">
        <Weather_icon iconNumber={icon} summary={summary} />
      </div>
      <div className="temperature">
        {Math.round(temperature)} {units.temperature}
      </div>
      <div className="precipitation">
        {Math.round(precipitation.total)} {units.precipitation}
      </div>
      <div className="wind">
        <div className="speed">{Math.round(wind.speed)} {units.wind_speed}</div>
        <div className="dir" style={{ transform: `rotate(${-45 + wind.angle}deg)` }}>
          <i className='bi bi-send-fill'></i>

        </div>
      </div>

    </div>
  )
}

export default HourlyForecast
