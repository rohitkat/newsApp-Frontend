import React from 'react'
import { Link } from 'react-router-dom'
import CityWeather from './CityWeather.tsx'
import SocialMedia from './SocialMedia.tsx'


function TopLinks() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="primary">
        <div className="container-fluid">
          <CityWeather />
          
          <div className="collapse navbar-collapse" id="navbarNav" style={{paddingLeft:'30px', paddingRight:'30px', paddingBottom:'4px'}}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  English
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Hindi
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sports
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{color:'blue'}} aria-disabled="true">
                  { new Date(Date.now()).toDateString()}
                </a>
              </li>
            </ul>
            
          </div>
          <SocialMedia />
        </div>
      </nav>
    </div>
  )
}

export default TopLinks