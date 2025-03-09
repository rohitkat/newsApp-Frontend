import React from 'react'
import { Image } from 'react-bootstrap'
import '../css/SocialMedia.css'

function SocialMedia() {
  return (
    <div className="social-media-icons">
        <ul>
            <li>
                <a href='/'>
                <Image src={`${process.env.PUBLIC_URL}/images/socialmedia/f.png`} alt="Facebook" />
                </a>
            </li>
            <li>
                <a href='/'>
                <Image src={`${process.env.PUBLIC_URL}/images/socialmedia/i.png`} alt="Instagram" />
                </a>
            </li>
            <li>
                <a href='/'>
                <Image src={`${process.env.PUBLIC_URL}/images/socialmedia/w.png`} alt="Whateapp" />
                </a>
            </li>
            <li>
                <a href='/'>
                <Image src={`${process.env.PUBLIC_URL}/images/socialmedia/y.png`} alt="Youtube" />
                </a>
            </li>
        </ul>
    </div>
  )
}

export default SocialMedia