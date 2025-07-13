
import { createContext, useEffect, useState } from 'react'
import { DEAFAULT_PLACE, MEASUREMENT_SYSTEMS,UNITS } from '../utls'

import  getWeatherData  from '../api'


const WeatherContext = createContext()


const WeatherContextComponent = ({ children }) => {
  const [placeAPI, setPlace] = useState(DEAFAULT_PLACE)
  const [loading, setLoading] = useState(true)

  const [current, setCurrent] = useState({})
  const [hourlyForecast, setHourlyForecast] = useState([])
  const [dailyForecast, setdailyForecast] = useState([])

  const [measurementSystem,setMeasuementSystem]=useState(MEASUREMENT_SYSTEMS.AUTO)

  const [units,setUnits]=useState({})

  useEffect(() => {
    setLoading(true)

    async function _getWeatherData() {
      const cw = await getWeatherData("current", placeAPI.place_id, measurementSystem)
      // console.log(setUnits(cw.units));
     setUnits(UNITS[cw.units]);
      
      // console.log(cw);
      
      

      setCurrent(cw.current)
      const hf = await getWeatherData("hourly", placeAPI.place_id,measurementSystem)
      setHourlyForecast(hf.hourly.data)
      const df = await getWeatherData("daily", placeAPI.place_id, measurementSystem)
      setdailyForecast(df.daily.data)

    setLoading(false)

    }

    _getWeatherData()
  }, [placeAPI,measurementSystem])





  return (
    <WeatherContext.Provider value={{
      placeAPI, loading, current,
      hourlyForecast,
      dailyForecast,
     measurementSystem,
setMeasuementSystem,units,setPlace
    }}>
      {children}
    </WeatherContext.Provider>

  )
}

export default WeatherContext

export { WeatherContextComponent }
