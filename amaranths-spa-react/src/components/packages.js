import React, { useEffect } from 'react';
import '../components/Packages.css';
import AmaranthLogo from '../images/amaranth 2.png';
import massage from '../images/3780085-hd_1920_1080_25fps.mp4';

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

                <video className='pv' autoPlay muted loop>
                    <source className="packV" src={massage} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

        </div>
    )
}
