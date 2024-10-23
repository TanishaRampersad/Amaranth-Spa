import React, { useEffect } from 'react';
import AmaranthLogo from '../images/amaranth 2.png'
import trees from '../images/trees.jpg';
import blackAndWhite from '../images/blackandwhite.jpg';
import './Massage.css';
//import { Link } from 'react-router-dom';
//import { ScrollTrigger } from "gsap/ScrollTrigger";
//import gsap from 'gsap';


export default function Massage() {
    useEffect(() => {
        
    })

    return(
        <div className='massage-page'>

            <div className="massage-banner">
                    <div className='massageText'>
                        <img src={AmaranthLogo} alt="logo"/>
                        <p>ENJOY LAVISH TRANQUILITY</p>
                        <h3>Amaranth Spa Massages</h3>
                    </div>

                    {/* <video className='pv' autoPlay muted loop>
                        <source className="packV" src={massage} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video> */}

                    <div className='massage-banner-image'>
                        <img className="massageImage" src={trees} alt="banner"/>
                    </div>
            </div>

            <div className='massage-second-image'>
                <img className="massage-therapist" src={blackAndWhite} alt="Massage therapist"/>
            </div>


            <div className='history-section'>
                <div className='historyText'>
                    <h2>Relaxation and Beauty since 2000.</h2>
                    <div className='HT'>
                        <p>We are Bangkok's No. 1 Korean Spa relaxation & Massage center. Offering a wide range of facial treatments and body massages at great value. Our luxurious beauty care center and spa was established in 2000.</p>
                        <p>It continues to be a beloved place to go for locals, expats and tourists. You are invited to meet our staff who are skillful and caring professionals. Amaranth is a cut above other skin care centers and spas because we treat your precious body and soul with love. We offer free tea & coffee for all customers. We are open to booked appointments and walk-in.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}