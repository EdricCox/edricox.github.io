import './toggle.css'
import {GiBarbedSun, GiNightSleep} from 'react-icons/gi'
import React from 'react'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Toggle = () => {
  const theme = useContext(themeContext)
  const lightMode = theme.state.lightMode

  const handleClick = () => {
    theme.dispatch({type: 'Toggle'})
  }
  return (
    <div className="toggle">
            <GiBarbedSun />
            <GiNightSleep />
            <div className="t-button"
            onClick={handleClick}
            style={lightMode? {left: '2px'}: {right: '2px'}}
            ></div>
    </div>
  )
}

export default Toggle

