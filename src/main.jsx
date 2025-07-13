import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeContextCpmponents } from "./context/themeContext"
import {WeatherContextComponent}  from "./context/weatherContex"


createRoot(document.getElementById('root')).render(
  <ThemeContextCpmponents>,
    <WeatherContextComponent>
      <StrictMode>
        <App />
      </StrictMode>,
    </WeatherContextComponent>
  </ThemeContextCpmponents>
)
