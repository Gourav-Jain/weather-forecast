import React from 'react';
import { getFormatedTime, API_IMG_URL } from '../utils';

export const DayCard = ({ forecastData }) => {
    return (
        <>
            {forecastData.map((val, key) => (
                <div key={key} className="days-container">
                    <div className="container">
                        <h3 className="date">{val.date}</h3>
                        <div className="weather-icon">
                            <div className="sunny">
                                <img alt="" src={`${API_IMG_URL}${val.forecast[0].weather[0].icon}@2x.png`} />
                            </div>
                            <p className="temp">{val.forecast[0].main.temp} <span>&#8451;</span></p>
                            <p className="conditions">{val.forecast[0].weather[0].description}</p>
                        </div>
                        <div className="time-wrapper">
                            <div className="time-wrap">
                                    <div className="text">
                                        <p>Time:</p>
                                        <p>Min Temp:</p>
                                        <p>Max Temp:</p>
                                    </div>
                                {val.forecast.map((itm, key) => (
                                    <div key={key} className="text">
                                        <p>{`${getFormatedTime(itm.dt_txt)}`}</p>
                                        <p>{itm.main.temp_min} <span>&#8451;</span></p>
                                        <p>{itm.main.temp_max} <span>&#8451;</span></p>
                                    </div>
                                ))}
                  
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default DayCard;