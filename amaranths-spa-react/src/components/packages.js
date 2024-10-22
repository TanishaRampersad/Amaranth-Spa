import React, { useEffect } from 'react';
import '../components/Packages.css';
import AmaranthLogo from '../images/amaranth 2.png';
import black from '../images/black.jpg';
import packageBanner from '../images/banner-2.jpg';
import lotus from '../images/lotus (1).png';

//import { Link } from 'react-router-dom';
//import { ScrollTrigger } from "gsap/ScrollTrigger";
//import gsap from 'gsap';


export default function Packages() {
    useEffect(() => {
        
    })

    return(
        <div className='PS'>
        
            <div className="pb">
                <div className='pt'>
                    <img src={AmaranthLogo} alt="logo"/>
                    <p>Experience the rejuvenating power of our premium Korean products</p>
                    <h3>Amaranth Packages</h3>
                </div>

                {/* <video className='pv' autoPlay muted loop>
                    <source className="packV" src={massage} type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}

                <div className='pv'>
                    <img className="packV" src={packageBanner} alt="banner"/>
                </div>
            </div>

            <div className='image'>
                <img className="therapist" src={black} alt="Massage therapist"/>
            </div>


            <div className='couples-massage-package'>
                <img className="flower" src={lotus} alt="logo"/>
                <h2>Couples Massage Package</h2>
                <br/>

                <h3>Duration: 2 hours</h3>
                <br/>

                <h3>Welcome Ritual:</h3>
                <p>Each couple will receive a  complimentary herbal tea or sparkling water served upon arrival.</p>
                <p>A short consultation to discuss preferences, any areas of tension, and massage techniques.</p>
                <br/>

                <h3>Side-by-Side Massage:</h3>
                <p>A 60-minute side-by-side massage tailored to each individual's preferences. Options could include:</p>
                <ul>
                    <li>Korean Full Body Care</li>
                    <li>Royal Thai Traditional Massage</li>
                    <li>Swedish Massage</li>
                </ul>
                <br/>

                <h3>Foot Ritual:</h3>
                <p>A 15 minute foot scrub with our Korean scrub</p>
                <p>A brief foot massage to relieve tension in the feet</p>
                <br/>

                <p>Private Relaxation Time:</p>
                <p>15 minutes of quiet time in a serene room with soft music and dim lighting before or after the massage.</p>
                <br/>

                <h3>Optional Add-Ons:</h3>
                <p>Upgrade to a 90-minute massage for a small fee</p>
                <p>Add a 30-minute facial or body scrub for enhanced pampering</p>
                <p>A bottle of champagne or wine for a celebratory touch</p>
                <br/>

                <h3>Take-Home Gifts:</h3>
                <p>A small gift such as a natural Korean skincare product (e.g., sheet mask or essence) for continued self-care at home.</p>
                <br/>

                <p className='cost'>Cost: 3 400 Baht</p>
            </div>

           

        </div>
    )
}
