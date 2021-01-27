import { useEffect, useState } from 'react'
import { themeSwitcher, initTheme } from '../helpers/themeSwitcher'

import SVG from 'react-inlinesvg';
import Moonline from '../assets/moon-clear-line.svg'
import Sunline from '../assets/sun-line.svg'

function ThemeSwitch() {

  const [theme, setThemeVar] = useState('light')

  const setTheme = () => {
    setThemeVar(themeSwitcher())
  }

  useEffect(() => {
    const current = initTheme()
    if(current === 'dark') {
      setThemeVar(current)
    } else {
      setThemeVar('light')
    }
  }, [])

  return (
    <div className="theme-switcher">
      <button onClick={setTheme} aria-label="Dark mode Light mode switch" >
        <SVG src={theme === 'dark'? Sunline : Moonline} ></SVG>
      </button>
    </div>
  )
}

export default ThemeSwitch
