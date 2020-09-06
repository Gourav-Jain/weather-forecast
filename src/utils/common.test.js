import {
  getFormatedDate,
  getFormatedTime,
  getGroupDataBySelectedKey,
  getUrlByCityID,
  getApiUrlByEnv
} from '../utils'

test('@Common getFormatedDate', () => {
  const output  = getFormatedDate('2017-09-05')
  expect(output).toEqual('Tuesday, September 5, 2017')
});

test('@Common getFormatedTime', () => {
    const output  = getFormatedTime('2017-09-05 06:36:00')
    expect(output).toEqual('06:36')
});

test('@Common getGroupDataBySelectedKey if data is empty', () => {
    const data = [];
    const col = '';
    const output  = getGroupDataBySelectedKey(data, col)
    expect(output).toEqual([])
});

test('@Common getGroupDataBySelectedKey if data is empty', () => {
    const data = [
        {
          "dt": 1599328800,
          "main": {
            "temp": 15.12,
          },
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
            }
          ],
          "dt_txt": "2020-09-05 18:00:00"
        },
        {
          "dt": 1599339600,
          "main": {
            "temp": 11.17,            
          },
          "weather": [
            {
              "id": 801,
              "main": "Clouds",
              "description": "few clouds",
              "icon": "02n"
            }
          ],
          
          "dt_txt": "2020-09-05 21:00:00"
        },
        {
            "dt": 1599339600,
            "main": {
              "temp": 11.17,            
            },
            "weather": [
              {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02n"
              }
            ],
            
            "dt_txt": "2020-09-06 12:00:00"
          },{
            "dt": 1599339600,
            "main": {
              "temp": 11.17,            
            },
            "weather": [
              {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02n"
              }
            ],
            
            "dt_txt": "2020-09-06 09:00:00"
        }];
        
    const col = 'dt_txt';
    const output  = getGroupDataBySelectedKey(data, col, ' ')
    expect(output.length).toEqual(2)
});

test('@Common getUrlByCityID ', () => {
  const output  = getUrlByCityID('http://api.com', 5466, 'GSHHS77667')
  expect(output).toEqual('http://api.com?id=5466&units=metric&appid=GSHHS77667')
});

test('@Common getApiUrlByEnv ', () => {
  let output  = getApiUrlByEnv()
  expect(output).toEqual('http://localhost:3001/forecast')

  process.env.NODE_ENV = 'production'
  output  = getApiUrlByEnv()
  expect(output).toEqual('http://api.openweathermap.org/data/2.5/forecast?')
});