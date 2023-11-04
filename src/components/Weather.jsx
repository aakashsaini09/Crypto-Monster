import React, { useState, useEffect } from 'react'
// import WeatherComp from './WeatherComp'
import './weather.css'

const Weather = () => {
  const [weatherCondition, setweatherCondition] = useState("Mist")
  const [searchVal, setsearchVal] = useState("Faridkot")
  const [weatherDetails, setweatherDetails] = useState("")
  const getWeather = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchVal}&units=metric&appid=6fccf600a9c4c2b9496fdc896025d4ee`;
      const data = await fetch(url);
      const parseData = await data.json();
      const { speed } = parseData.wind;
      //  const { main } = data.weather[0];
      const { sunset, country, id } = parseData.sys;
      const { all } = parseData.clouds;
      const { haze, icon, main } = parseData.weather[0]
      const { timezone, name } = parseData
      const { temp, humidity, pressure } = parseData.main
      console.log(parseData)
      let sec = sunset;
      let date = new Date(sec * 1000);
      let realtime = `${date.getHours()}: ${date.getMinutes()}`;
      //  console.log(searchVal)
      console.log(main)
      const weatherapiInfo = {
        speed, sunset, country, id, all, haze, icon, realtime, temp, humidity, pressure, name, timezone, main
      }
      setweatherDetails(weatherapiInfo);
      //  useEffect(() => {
      //   if (main) {
      //     switch (main) {
      //       case "Clouds":
      //         setWeatheState("wi-day-cloudy");
      //         break;
      //       case "Clear sky":
      //         setWeatheState("wi-fog");
      //         break;
      //       case "Clear":
      //         setWeatheState("wi-day-sunny");
      //         break;
      //       case "Mist":
      //         setWeatheState("wi-dust");
      //         break;

      //       default:
      //         setWeatheState("wi-day-sunny");
      //         break;
      //     }
      //   }
      // }, [main]);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getWeather()
  }, [])
  const [weatherState, setWeatheState] = React.useState("");


  return (
    <>
      <div className='searchSec'>
        <input id='search' autoFocus placeholder='Search your city weather' className='weatherinput' type='search' value={searchVal} onChange={(e) => { setsearchVal(e.target.value) }} />
        <button type='button' className='searchbutton' onClick={() => getWeather()}>Search</button>
      </div>
      {/* <WeatherComp weatherDetails={weatherDetails} name={name}/> */}




      <div className='container'>
        <div className='weather'>
          <div className='top-section'> <i className={"wi wi-sunset firsticon"}></i><br /> {weatherCondition}</div>
          <div className='middle-section'>
            <div className='cloud'>{weatherDetails.temp}&#8451;<br /></div><span className='countryname'>{weatherDetails.name}, {weatherDetails.country}</span>
            <div className='time'>{new Date().toLocaleDateString()}<br />{weatherDetails.realtime}</div>
          </div>
          <div className='bottom-section'>
            <div className='itsbottom humidity'> <i className={"wi wi-sunset humidityicon"}></i>Humidity<br />{weatherDetails.humidity}</div>
            <div className='itsbottom pressure'><i className={"wi wi-rain humidityicon"}></i><br />Pressure<br />{weatherDetails.pressure} MM</div>
            <div className='itsbottom sunset'><i className={"wi wi-sunset humidityicon"}></i><br/>Sunset<br />{weatherDetails.realtime}</div>
            <div className='itsbottom wind'><i className={"wi wi-strong-wind humidityicon"}></i><br/>Wind<br />{weatherDetails.speed}</div>
          </div>
        </div>
      </div>

    </>
  )
}
export default Weather
