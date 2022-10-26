import './toggle.css'
import {GiBarbedSun, GiNightSleep} from 'react-icons/gi'
import React from 'react'

const Toggle = () => {
  return (
    <div className="toggle">
            <GiBarbedSun />
            <GiNightSleep />
            <div className="t-button"></div>
    </div>
  )
}

export default Toggle

