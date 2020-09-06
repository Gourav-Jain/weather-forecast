import React from 'react';
import '../style/index.css'
import WeatherForecast from '../views/WeatherForecast'

function App() {
  return (
    <div className="container-wrapper">
      <div className="container-content">
        <WeatherForecast />
      </div>
    </div>
  );
}

export default App;
