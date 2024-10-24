import React, { useEffect } from 'react';
import './Contact.css';
import pic from '../images/contact-pic.jpg';
import MouseFollower from "mouse-follower"; // Import the Mouse Follower library
import 'mouse-follower/dist/mouse-follower.min.css'; // Import its CSc
//import { Link } from 'react-router-dom';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';


export default function Contact() {
    useEffect(() => {

        let heading = document.querySelector('.pt h3')
        let nav = document.querySelector('nav');
        let navText = document.querySelectorAll('nav li');
        let navHeader = document.querySelectorAll('ul h4');
        let navP = document.querySelector('ul p')
        let menu = document.querySelector('.menu');
        let navButton = document.querySelector('.shrink-button');
 
        let navigation = gsap.to(nav, {
         backgroundColor: "#EAE5DF",
         borderBottom: "0.1px solid #55361d97",
         color: "#322018",
         paused: true,
         ease: "none"
        })
 
        let nText = gsap.to(navText, {
         color: "#322018",
         paused: true,
         ease: "none"
        })
 
        let navH = gsap.to(navHeader, {
         color: "#322018",
         paused: true
        })
 
        let nP = gsap.to(navP, {
         color: "#322018",
         paused: true
        })
 
        let M = gsap.to(menu, {
         filter: "invert(0)",
         paused: true
        })
 
        let nButton = gsap.to(navButton, {
         backgroundColor: "#2F4730",
         color: "#FFFFFF",
         paused: true
        })
 
 
        ScrollTrigger.create({
         trigger: heading,
         start: "top top%",
         ease: "none",
         onEnter: ()=> {
           navigation.play();
           nText.play();
           navH.play();
           nP.play();
           M.play()
           nButton.play();
         },
         onLeaveBack: () => {
           navigation.reverse();
           nText.reverse();
           navH.reverse();
           nP.reverse();
           M.reverse();
           nButton.reverse();
         },
        })


        const cursor = new MouseFollower({
            el: null,
            container: document.body,
            className: 'mf-cursor',
            innerClassName: 'mf-cursor-inner',
            textClassName: 'mf-cursor-text',
            mediaClassName: 'mf-cursor-media',
            mediaBoxClassName: 'mf-cursor-media-box',
            iconSvgClassName: 'mf-svgsprite',
            iconSvgNamePrefix: '-',
            iconSvgSrc: '',
            dataAttr: 'cursor',
            hiddenState: '-hidden',
            textState: '-text',
            iconState: '-icon',
            activeState: '-active',
            mediaState: '-media',
            stateDetection: {
                '-pointer': 'a,button',
                '-hidden': 'iframe',
                '-view': '[data-cursor="-view"]',
                '-no-cursor': '.hide-cursor',
                '-expand': 'expand'
            },
            visible: true,
            visibleOnState: false,
            speed: 0.55,
            ease: 'expo.out',
            overwrite: true,
            skewing: 0,
            skewingText: 0,
            skewingIcon: 2,
            skewingMedia: 2,
            skewingDelta: 0.001,
            skewingDeltaMax: 0.15,
            stickDelta: 0.15,
            showTimeout: 20,
            hideOnLeave: true,
            hideTimeout: 300,
            hideMediaTimeout: 300
        });
    
        document.addEventListener("DOMContentLoaded", function () {
          new MouseFollower();  // or your specific initialization
        });
   
   
         return () => {
           cursor.destroy(); // Cleanup to prevent memory leaks
         };
    })

    return(
        <div className='contact-section'>

            <div className='secOne'>
                <div className='C'>
                    <h1>Contact Us</h1>
                    <p className='CP'>Feel free to reach out to us for any questions or appointments. We are here to assist you with scheduling your next spa session.</p>
                    <p className='open'>We are open everyday: 10:00am - 21:00pm</p>

                    <button>Chat on Whatsapp</button>
                </div>

                <div className='C-details'>
                    <p><strong>Phone Number:</strong> +66818230296</p>
                    <p><strong>Line & Kakao ID:</strong> josylee</p>
                    <p><strong>Email:</strong> josie835@gmail.com</p>
                </div>
            </div>

            <div className='cPic'>
                <img src={pic} alt="massage"/>
            </div>
        </div>

       
    )
}