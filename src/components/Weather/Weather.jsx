import React from 'react'
import './weather.css'
import {BsUmbrellaFill} from 'react-icons/bs'
import {TbTemperatureCelsius} from 'react-icons/tb'
import {TiWeatherPartlySunny} from 'react-icons/ti'
import {SiGooglemaps} from 'react-icons/si'

const Weather = () => {
  return (
        <div className="container weather__container">
          <div className="content">
            <p>How's you yesterday? I wish you have a great day.<br />
            Thank you for visiting my portfolio page<br />
            And If you are in Ho Chi Minh city, there are often sudden rains here!<br />
            Don't forget to bring an umbrella <BsUmbrellaFill /></p>
          </div>
          <div className="weather_content">
            <div className="search">
              <input type="text" name="search" placeholder='Enter Location' className='search__content'/>
              <div className="weather_content-left">
                <ul>
                  <li><TiWeatherPartlySunny className="weather_icon-sun"/></li>
                  <li >31<TbTemperatureCelsius /></li>
                </ul>
                <ul>
                  <li><h6>Chance of rain: 57%</h6></li>
                  <li><h6>Humidity: 80%</h6></li>
                  <li><h6>Wind: 16 km/h</h6></li>
                </ul>
              </div>
              <div className="weather_content-right">
                  <ul>
                    <SiGooglemaps />
                    <h6>11 Ward,Phu Nhuan District</h6>
                    <h6>Ho Chi Minh City</h6>
                  </ul>

              </div>
            </div>
          </div>
       </div>
  )
}

export default Weather
