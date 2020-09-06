import React from 'react';
import { render } from '@testing-library/react';
import DayCard from './DayCard';


const data = [{ "date": "Saturday, September 5, 2020", "forecast": [{ "dt": 1599328800, "main": { "temp": 15.12, "temp_min": 13.34, "temp_max": 15.12 }, "weather": [{ "id": 500, "main": "Rain", "description": "light rain", "icon": "10d" }], "dt_txt": "2020-09-05 18:00:00" }, { "dt": 1599339600, "main": { "temp": 11.17, "temp_min": 9.61, "temp_max": 11.17,}, "weather": [{ "id": 801, "main": "Clouds", "description": "few clouds", "icon": "02n" }], "dt_txt": "2020-09-05 21:00:00" }] }]

test('@DayCard', () => {
  const { container } = render(<DayCard forecastData={data} />);
  expect(container).toMatchSnapshot()
});