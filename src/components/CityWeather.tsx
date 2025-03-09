import React from 'react'
import {Image} from 'react-bootstrap'
import  '../css/CityWeather.css'

function CityWeather() {
  return (
    
      <div className='weather'>
        <Image src='https://mcmscache.epapr.in/static_images/weather/10d.png' alt='weather-icon' className='weatherIcon' />

        <span className='cityWeather' >Shimla </span>
         | 
        <span> 7.39 °C </span>
         | AQI 
        <span className='yellowText'> 94  </span>
      </div>
  )
}

export default CityWeather