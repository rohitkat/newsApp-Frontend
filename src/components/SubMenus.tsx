import React from 'react'
import { Link } from 'react-router-dom'
import '../css/SubMenus.css'

function SubMenus() {
  return (
    <div className='container-fluid bg-primary bg-gradient'>
        <div className='innerTags'>
            <Link to='/ipl2025' >IPL 2025</Link>
            <Link to='/delhipollution' >Delhi Polution</Link>
            <Link to='/mahakumbh2025' >Maha Kumbh 2025</Link>
            <Link to='/championstrophy' >Champions Trophy</Link>
        </div>
    </div>
  )
}

export default SubMenus;