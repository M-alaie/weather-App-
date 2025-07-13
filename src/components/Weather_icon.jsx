import React from 'react'

const Weather_icon = ({iconNumber,summary}) => {
  return (
    <img src={`/dist/weather_icons/set04/medium/${iconNumber}.png`} alt={summary} />
  )
}

export default Weather_icon
