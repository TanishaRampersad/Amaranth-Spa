import './navMenu.css';
import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react'; 
import star from '../images/star.png';
//import gsap from 'gsap';

export default function Navbar() {

  useEffect(() => {

  })


    return(
      <>
        <div className='menu-slide'>
            <h3>Menu</h3>

            <ul>
            <li>Home</li>
            <li>Specials</li>
            <li>Packages</li>
            <li>Massages</li>
            <li>Contact</li>
            </ul>

            <hr/>

            <div>
            <div className='reviews'>
                <div className='review-stars'>
                    <img src={star} alt="stars"></img>
                    <img src={star} alt="stars"></img>
                    <img src={star} alt="stars"></img>
                    <img src={star} alt="stars"></img>
                    <img src={star} alt="stars"></img>
                </div>

                <p><Link className='link'><strong>5.0/</strong>555 reviews</Link></p>
            </div>

            <div className='whatsapp'>
                <p>Whatsapp</p>
            </div>
            </div>

        </div>
      </>
    )
}