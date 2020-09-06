export const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
export const API_URL = `http://api.openweathermap.org/data/2.5/forecast`
export const API_IMG_URL = `http://openweathermap.org/img/wn/`

export const DATE_FORMATE_OPTION = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
export const TIME_FORMATE_OPTION = { hour: '2-digit', minute: '2-digit' };


export const getGroupDataBySelectedKey = (data, col, sep) => {
  let groupArrays = [];
  if (data && col && sep) {
    const groups = data.reduce((groups, item) => {
      const key = sep ? item[col].split(sep)[0] : item[col];
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(item);
      return groups;
    }, {});
    
    // Edit: to add it in the array format instead
    groupArrays = Object.keys(groups).map((itm) => {
      return {
        date: getFormatedDate(itm),
        forecast: groups[itm]
      };
    });
    
  }
  return groupArrays;
}
    
    

export const getFormatedDate = (dt) => new Date(dt).toLocaleDateString('en-US', DATE_FORMATE_OPTION);

export const getFormatedTime = (dt) => new Date(dt).toLocaleTimeString([], TIME_FORMATE_OPTION);

export const getUrlByCityID = (url, cityId, apiKey) => `${url}?id=${cityId}&units=metric&appid=${apiKey}`

export const getApiUrlByEnv = () => {
  let url = 'http://localhost:3001/forecast'
  if (process.env.NODE_ENV === 'production') {
    url = API_URL
  }
  return url
}
