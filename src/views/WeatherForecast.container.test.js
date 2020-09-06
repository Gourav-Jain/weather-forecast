import { renderHook, act } from '@testing-library/react-hooks'
import { useWeatherForecastContainer } from './WeatherForecast.container';


test('@WeatherForecastContainer', () => {
    const { result } = renderHook(() => useWeatherForecastContainer())
    expect(result.current.cityData).toEqual({})
    expect(result.current.forecastData.length).toBe(0)
});

test('@WeatherForecastContainer should call with fetch', () => {
   
    const fakeForecast = {
        city: 'Swindon',
        country: 'GB',
        list: [{}]
    };
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(fakeForecast)
        })
    );
    const { result, waitForNextUpdate } = renderHook(() => useWeatherForecastContainer())

    act(() => {
        result.current.cityData = {city: fakeForecast.city}
    });
    act(() => {
        result.current.forecastData = fakeForecast.list
    });
   
    expect(fetch).toHaveBeenCalled();
    waitForNextUpdate();
    expect(result.current.cityData.city).toEqual('Swindon')
    expect(result.current.forecastData.length).toBe(1)
    global.fetch.mockRestore();
});