import React, { useContext, useState } from 'react'
import "../assets/style/components/Search.scss"
import { searchResult } from '../api'
import WeatherContext from '../context/weatherContex'
export const Search = () => {
  const { setPlace } = useContext(WeatherContext)

  const [text, setText] = useState("")
  const [searchPlace, setSearchPlace] = useState([])
  const [openSearchResult, setOpenSearchResult] = useState(false)
  async function onSearch(event) {
    setText(event.target.value)
    const data = await searchResult(event.target.value)
    setSearchPlace(data)
    setOpenSearchResult(data.length)



  }

  const changePlace = (place) => {
    setPlace(place)
    setText("")
    setOpenSearchResult(false)
  }
  console.log(text);

  return (
    <>
      <div className='search-container'>
        <div className='search-icon'>
          <i className="bi bi-search"></i>
        </div>
        <div className='search-input'>
          <input type="text" name="Search-City" id="Search-City" placeholder='Search City ....' value={text} onChange={onSearch} />
        </div>
        {openSearchResult && (
          <div className="search-results">
            <div className="results-container">

              {searchPlace.map(place =>
                <div className='result' key={place.place_id} onClick={() => changePlace(place)}>
                  {place.name} {place.adm_area1} {place.country}
                </div>
              )


              }

            </div>
          </div>
        )}

      </div>
    </>
  )
}
