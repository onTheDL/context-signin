import React, { createContext } from 'react'
import useToggleState from '../hooks/useToggleState'

export const ThemeContext = createContext()

export function ThemeProvider(props) {
  const [isDarkMode, toggle] = useToggleState(false)

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme: toggle }}>
      {props.children}
    </ThemeContext.Provider>
    )
  
}