import React from 'react'
import "../assets/style/components/Main.scss"
import CurrentWeather from './CurrentWeather'
import Forecast from './Forecast'
// import { getDailyForcast, getHourlyForcast } from '../api'
import WeatherContext from '../context/weatherContex'
import { useContext } from 'react'
import { Loader } from './Loader'



export const Main = () => {
  const { loading,current,
hourlyForecast,
dailyForecast } = useContext(WeatherContext)
  return (
    <div className='Main'>
      {loading ? <Loader />
        :
        <>
          <CurrentWeather data={current} />
          <Forecast type="Hourly" title="HOURLY FORCAST" data={hourlyForecast} />
          <Forecast type="daily" title="DAILY FORCAST 21ST" data={dailyForecast} />
        </>}



    </div>
  )
}
