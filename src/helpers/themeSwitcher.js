const THEMES = {
  light: 'light',
  dark: 'dark'
}

const setTheme = (value) => {
  document.documentElement.setAttribute('data-theme', value);
  localStorage.setItem('theme', value);
  return value
}

const initTheme = () => {
  const currentTheme = localStorage.getItem('theme');
  if(currentTheme) {
    setTheme(currentTheme)
  }
  return currentTheme
}

const themeSwitcher = (value = null) => {
  if(value !== null) {
    setTheme(value)
    return value
  }
  
  const theme = document.documentElement.getAttribute('data-theme')

  let current = THEMES.light
  if(!theme || theme === THEMES.light) {
    current = THEMES.dark
  } 
  
  return setTheme(current)
}

export { themeSwitcher, initTheme }