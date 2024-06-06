import React, {useState} from 'react'
import './weather.css'
const WeatherComp = ({weatherDetails }) => {
const [weatherCondition, setweatherCondition] = useState("normal")
  return (
    <>
      <div className='container'>
        <div className='weather'>
          <div className='top-section'><i className={'wi-day-rain'}></i></div>
          <div className='middle-section'>
            <div className='cloud'><i className={"wi wi-sunset"}></i>{weatherDetails.temp}&#8451;<br/></div><span className='countryname'>{weatherDetails.name}, {weatherDetails.country}</span> 
            <div className='time'>{new Date().toLocaleDateString()}<br/>{weatherDetails.realtime}</div>
          </div>
          <div className='bottom-section'>
            <div className='bottom-1'>Humidity = {weatherDetails.humidity}</div>
            <div className='bottom-2'>Pressure = {weatherDetails.pressure}</div>
            <div className='bottom-3'>Sunset {weatherDetails.sunset} PM</div>
            <div className='bottom-4'><i className={"wi wi-sunset"}></i></div>
          </div>
        </div>
      </div>
            <div className='container'>
        <div className='weather'>
          <div className='top-section'><i className={'wi-day-rain'}></i></div>
          <div className='middle-section'>
            <div className='cloud'><i className={"wi wi-sunset"}></i>{weatherDetails.temp}&#8451;<br/></div><span className='countryname'>{weatherDetails.name}, {weatherDetails.country}</span> 
            <div className='time'>{new Date().toLocaleDateString()}<br/>{weatherDetails.realtime}</div>
          </div>
          <div className='bottom-section'>
            <div className='bottom-1'>Humidity = {weatherDetails.humidity}</div>
            <div className='bottom-2'>Pressure = {weatherDetails.pressure}</div>
            <div className='bottom-3'>Sunset {weatherDetails.sunset} PM</div>
            <div className='bottom-4'><i className={"wi wi-sunset"}></i></div>
          </div>
{/*           <div className='bottom-section'>
            <div className='bottom-1'>Humidity = {weatherDetails.humidity}</div>
            <div className='bottom-2'>Pressure = {weatherDetails.pressure}</div>
            <div className='bottom-3'>Sunset {weatherDetails.sunset} PM</div>
            <div className='bottom-4'><i className={"wi wi-sunset"}></i></div>
          </div> */}
        </div>
      </div>
            <div className='container'>
        <div className='weather'>
          <div className='top-section'><i className={'wi-day-rain'}></i></div>
          <div className='middle-section'>
            <div className='cloud'><i className={"wi wi-sunset"}></i>{weatherDetails.temp}&#8451;<br/></div><span className='countryname'>{weatherDetails.name}, {weatherDetails.country}</span> 
            <div className='time'>{new Date().toLocaleDateString()}<br/>{weatherDetails.realtime}</div>
          </div>
          <div className='bottom-section'>
            <div className='bottom-1'>Humidity = {weatherDetails.humidity}</div>
            <div className='bottom-2'>Pressure = {weatherDetails.pressure}</div>
            <div className='bottom-3'>Sunset {weatherDetails.sunset} PM</div>
            <div className='bottom-4'><i className={"wi wi-sunset"}></i></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WeatherComp
