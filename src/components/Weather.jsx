import React, { useState, useEffect } from 'react'
import './weather.css'
const Weather = () => {
  const [searchVal, setsearchVal] = useState("jind")
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
      let sec = sunset;
      let date = new Date(sec * 1000);
      let realtime = `${date.getHours()}: ${date.getMinutes()}`;
      const weatherapiInfo = {
        speed, sunset, country, id, all, haze, icon, realtime, temp, humidity, pressure, name, timezone, main
      }
      setweatherDetails(weatherapiInfo);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getWeather()
  }, [])
  function navValueSet(city) {
    setsearchVal(city)
    getWeather()
  }
  return (
    <>
      <div className="container py-3">
        <header>
          <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom justify-content-around">
            <span className="fs-2">MAUSAM</span>
            <div className="input-filed">
              <form className="d-flex" role="search">
                <input id='search' autoFocus className="form-control me-5 weatherinput border border-success" placeholder="Search city" aria-label="Search" type='search' value={searchVal} onChange={(e) => { setsearchVal(e.target.value) }} />
                <button className="btn btn-outline-success searchbutton" type="button" onClick={() => getWeather()}>Search</button>
              </form>
            </div>
          </div>
          {/* ******************************************************************* */}
          <nav className="navbar navbar-expand-lg bg-body-tertiary p-0 m-3" id='nabbar'>
            <ul className="navbar-nav gap-5 me-auto mb-5 mb-lg-0" id='navul'>
              <li className="nav-item">
                <a className="nav-link active linkclass" aria-current="page" href="#" onClick={() => navValueSet("mumbai")}>Mumbai</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active linkclass" aria-current="page" href="#" onClick={() => navValueSet("delhi")}>Delhi</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active linkclass" aria-current="page" href="#" onClick={() => navValueSet("tokyo")}>Tokyo</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active linkclass" aria-current="page" href="#" onClick={() => navValueSet("london")}>London</a>
              </li>
            </ul>
          </nav>
          {/* ******************************************************************* */}
          <section>
            <div className="container py-5s h-60">
              <div className="row d-flex justify-content-center align-items-center h-100" id='one'>
                <div className="col-md-9 col-lg-7 col-xl-5">
                  <div className="card mb-4 gradient-custom">
                    <div className="card-body p-4">
                      <div id="demo1" className="carousel slide" data-ride="carousel">
                        <ul className="carousel-indicators mb-0">
                          <li data-target="#demo1" data-slide-to="0" className="active"></li>
                          <li data-target="#demo1" data-slide-to="1"></li>
                          <li data-target="#demo1" data-slide-to="2"></li>
                        </ul>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <div className="d-flex justify-content-between mb-4">
                              <div>
                                <h2 className="display-2"><strong>{weatherDetails.temp}&deg;C</strong></h2>
                                <p className="text-muted mb-0">{weatherDetails.name}, {weatherDetails.country}</p>
                                <br />{new Date().toLocaleDateString()}<br />
                              </div>
                              <div>
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu3.webp"
                                  width="150px" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="card radius-comom" >
                    <div className="card-body p-4">
                      <div id="demo3" className="carousel slide" data-ride="carousel">
                        <ul className="carousel-indicators mb-0">
                          <li data-target="#demo3" data-slide-to="0"></li>
                          <li data-target="#demo3" data-slide-to="1"></li>
                          <li data-target="#demo3" data-slide-to="2" className="active"></li>
                        </ul>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <div className="d-flex justify-content-around text-center mb-4 pb-3 pt-2">
                              <div className="flex-column">
                                <p className="small"><strong>{weatherDetails.humidity}%</strong></p>
                                <p className="mb-5"><strong>Humidity</strong></p>
                                <i className="fas fa-water fa-2x mb-3 comom" ></i>
                              </div>
                              <div className="flex-column">
                                <p className="small"><strong>{weatherDetails.speed} km/h</strong></p>
                                <p className="mb-5"><strong>Wind</strong></p>
                                <i className="fas fa-wind fa-2x mb-3 comom" ></i>
                              </div>
                              <div className="flex-column">
                                <p className="small"><strong>{weatherDetails.pressure}</strong></p>
                                <p className="mb-5"><strong>Pressure</strong></p>
                                <i className="fas fa-cloud fa-2x mb-3 comom" ></i>
                              </div>
                              <div className="flex-column">
                                <p className="small"><strong>{weatherDetails.realtime} PM</strong></p>
                                <p className="mb-5"><strong>SunSet</strong></p>
                                <i className="fas fa-clock fa-2x mb-3 comom"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </header>
      </div>
      <footer>
      <div id='footer'>
         Build by Aakash Saini, 2023 &#169; <a target='_blank' href="https://aakash-saini.netlify.app/">Aakash Saini</a>
      </div>
      </footer>

    </>
  )
}
export default Weather
