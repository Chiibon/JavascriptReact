import React from 'react'

const menuBtn = document.querySelector('.menu-btn')
const mainMenu = document.querySelector('#main-menu')
const darkModeSwitch = document.querySelector('#darkmode-switch')
const hasSetDarkMode = localStorage.getItem('darkmode')

menuBtn.addEventListener('click',() => {
  const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true'
  if (isExpanded) {
    menuBtn.setAttribute('aria-expanded', false)
    mainMenu.addEventListener('animationed', () => {
      mainMenu.classList.add('hide')
    }, {once: true})
  }
  else {
    mainMenu.classList.remove('hide')
    menuBtn.setAttribute('aria-expanded', true)
  }
})

if(hasSetDarkMode == null) {
  if(window.matchMedia('prefers-color-scheme: dark').matches) {
    enableDarkMode()
  }
  else {
    disableDarkMode()
  }
} else if (hasSetDarkMode === 'on') {
  enableDarkMode()
} else if (hasSetDarkMode === 'off') {
  disableDarkMode()
}

darkModeSwitch.addEventListener('change', () => {
  if(darkModeSwitch.checked) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('darkmode', 'on')
  }
  else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('darkmode', 'off')
  }
})

function enableDarkMode() {
  darkModeSwitch.checked = true
  document.documentElement.classList.add('dark')
}
function disableDarkMode() {
  darkModeSwitch.checked = false
  document.documentElement.classList.remove('dark')
}

const Header = () => {
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
            <input type="checkbox" id="darkmode-switch"></input>
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