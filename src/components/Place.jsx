
import { useContext } from 'react'
import WeatherContext from "../context/weatherContex"

const Place = () => {
const {placeAPI}=useContext(WeatherContext)
// console.log(placeAPI);


  return (
    <div className='place' key={placeAPI.place_id}>
    <i className="bi bi-geo-alt"></i>, {placeAPI.name} <b>{placeAPI.country} </b>
    </div>
  )
}

export default Place
