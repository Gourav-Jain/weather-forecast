import { useEffect, useState } from 'react';
import { getGroupDataBySelectedKey, getUrlByCityID, getApiUrlByEnv, API_KEY } from '../utils'

export const useWeatherForecastContainer = () => {
    const [forecastData, setForecastData] = useState([]);
    const [cityData, setCityData] = useState();
    const [error, setError] = useState('');
    useEffect(() => {
        const url = getUrlByCityID(getApiUrlByEnv(), 2636389/* Swindon GB */, API_KEY);
        fetch(url)
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                } else if (res.status === 401) {
                    setError('Invalid API key.')
                } else {
                    setError('OOps something went wrong.')
                }
            })
            .then(data => {
                const groupData = getGroupDataBySelectedKey(data.list, 'dt_txt', ' ');
                setCityData({ city: data.city.name, country: data.city.country })
                setForecastData(groupData);
            })
            .catch((error) => {
                setError(error.message)
            });
    }, []);
    return {
        error: error || "",
        cityData: cityData || {},
        forecastData: forecastData || []
    }
}
