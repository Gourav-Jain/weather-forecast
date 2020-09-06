import React from 'react';
import { render } from '@testing-library/react';
import WeatherForecast from './WeatherForecast';

test('@WeatherForecast', () => {
  const { container } = render(<WeatherForecast />);
  expect(container).toMatchSnapshot()
});