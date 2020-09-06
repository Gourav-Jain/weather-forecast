import React from 'react';
import { useWeatherForecastContainer } from './WeatherForecast.container'
import DayCard from '../components/DayCard'

export const WeatherForecast = () => {
  const { error, cityData, forecastData } = useWeatherForecastContainer();

  let element = <h1 style={{color:"red"}}>{error}</h1> 
  if (!error && (forecastData && forecastData.length > 0)) {
    element = <div>
      <h1>{`${cityData.city}, ${cityData.country}`}</h1>
      <DayCard forecastData={forecastData} />
    </div>
  }
  
  return (
    <>
      { element }
    </>
  )
}

export default WeatherForecast;