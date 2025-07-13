import React, { useContext, useState } from 'react'
import "../assets/style/components/Settings.scss"
import ThemeContext from '../context/themeContext'
import { MEASUREMENT_SYSTEMS } from '../utls'
import WeatherContext from '../context/weatherContex'
const Setting = () => {

  const [openSystem, setOpenSystem] = useState(false)

  const { dark, setDark, saveThemeStorage, } = useContext(ThemeContext)
  const { measurementSystem,setMeasuementSystem,  } = useContext(WeatherContext)
  

  const toggleTheme = () => {

    setDark(prevDark => !prevDark)
    saveThemeStorage(!dark)


  }

  const changMeaSureSystems=(system)=>{
   setMeasuementSystem(system)
   openSystem(false)
    

  }
  console.log(measurementSystem);


  return (

    <div className='Settings'>
      <div className='theme-toggler'>

        <div className='theme-buttons' onClick={toggleTheme}>               //شاید این تک لازم نباشه
          <div className={`light-theme-btn ${dark ? "" : 'active'}`}>
            <i className='bi bi-sun'></i>
          </div>
          <div className={`dark-theme-btn ${dark ? 'active' : ""}`}>
            <i className='bi bi-moon'></i>
          </div>
        </div>

      </div>
      <div className='settings-btn' onClick={() => setOpenSystem(prev => !prev)}>
        <i className={`bi bi-gear${openSystem ? "-fill" : ""}`}></i>
        <div className={`settings-menu ${openSystem ? "open" : ""}`}  >
          <div className={`measurement-systems`}>
            <h4>Measurement System:</h4>
            <div className="systems">
              {Object.values(MEASUREMENT_SYSTEMS).map(system => (
                <div key={system} className={`system ${system===measurementSystem ? "active" : ""}`} onClick={()=>changMeaSureSystems(system)
                }>{system}</div>

              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Setting
