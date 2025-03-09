import React from 'react'
import NewsCard from './NewsCard.tsx'
import { Link } from 'react-router-dom'
import '../css/Footer.css'

function Footer() {
  return (
    <div className='container-fluid footer bg-body-tertiary' data-bs-theme="dark" >
        <div className='row'>
        <div className='col-lg-1' >
        </div>
            <div className='col-lg-2 col-md-6 col-sm-6 col-xs-12' >
                <h2 className='font-weight-bold mb-3 footer-header' >Quick Link</h2>
                <ul  className='footer-ul'>
                    <li className='footer-li'>
                        <Link className='footer-link' to='/'>Home</Link>
                    </li>
                    <li className='footer-li'>
                        <Link className='footer-link' to='/'>About Us</Link>
                    </li>
                    <li className='footer-li'>
                        <Link className='footer-link' to='/'>Contact Us</Link>
                    </li>
                    <li className='footer-li'>
                        <Link className='footer-link' to='/'>Web Stories</Link>
                    </li>
                    <li className='footer-li'>
                        <Link className='footer-link' to='/'>Privacy Policy</Link>
                    </li>
                </ul>
            </div>
            <div className='col-lg-1' >
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-xs-12' >

            <h2 className='font-weight-bold mb-3 footer-header' >Regional News</h2>
                <ul  className='footer-ul'>
                    <li className='footer-li'>
                        <Link className='footer-link' to='/'>Home</Link>
                    </li>
                    <li className='footer-li'>
                        <Link className='footer-link' to='/'>About Us</Link>
                    </li>
                    <li className='footer-li'>
                        <Link className='footer-link' to='/'>Contact Us</Link>
                    </li>
                    <li className='footer-li'>
                        <Link className='footer-link' to='/'>Web Stories</Link>
                    </li>
                    <li className='footer-li'>
                        <Link className='footer-link' to='/'>Privacy Policy</Link>
                    </li>
                </ul>
            </div>
            <div className='col-lg-1' >
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6 col-xs-12' >
                <NewsCard />
            </div>
           
        </div>
    </div>
  )
}

export default Footer