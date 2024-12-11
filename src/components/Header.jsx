import React, { useEffect, useState } from 'react'


const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  
  useEffect(() => {
    const storedThemeMode = localStorage.getItem('themeMode')
    if (storedThemeMode === 'dark' || (!storedThemeMode && window.matchMedia ('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    }
    else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('light')
    }
  }, [])
  const handleThemeToggle = () => {
    if (isDarkMode) {
      setIsDarkMode(false)
      localStorage.setItem('themeMode', 'light')
      document.documentElement.classList.remove('dark')
  } else {
      setIsDarkMode(true)
      localStorage.setItem('themeMode', 'dark')
      document.documentElement.classList.add('dark')
  }
}

  return (
  <div className="wrapper">
    <nav className="main-nav" aria-label='main navigation'>
      <a href="#main" className="skip-link">Skip to main content</a>
      <div className="container">
        <a href="/">
        <img className="show-light" src="/images/Siliconlogo.svg" alt="Silicon logotype"/>
        <img className="show-dark" src="/images/SiliconDark.svg" alt="Silicon logotype"></img>
        </a>
        <div className="darkmode-toggle">
          <p>Dark Mode</p>
          <label className="toggle">
            <input type="checkbox" id="darkmode-switch" checked={isDarkMode} onChange={handleThemeToggle}></input>
            <span className="slider"></span>
            </label>
        </div>
        <button className="menu-btn" aria-controls="main-menu" aria-expanded="false" aria-label="toggle navigation">
          <img src="/images/menu.svg" alt=""></img>
        </button>
        <ul id="main-menu" className="main-menu">
          <div className='lefty'>
          <li>
            <a href="#" className="nav-link">Features</a>
          </li>
          <li>
            <a href="#" className="nav-link">Contact</a>
          </li>
          </div>
          <li>
            <a href="#" className="btn btn-primary">
              <img className="user-icon" src="/images/human.svg" alt=""></img>
              <span>Sign in / up</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  )
}

export default Header