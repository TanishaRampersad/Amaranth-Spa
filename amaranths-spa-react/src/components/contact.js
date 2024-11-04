import React, { useEffect } from 'react';
import './Contact.css';
import pic from '../images/contact-pic.jpg';
import { HashLink as Link} from 'react-router-hash-link';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';


export default function Contact() {
    useEffect(() => {

        let heading = document.querySelector('.C h1')
        let nav = document.querySelector('nav');
        let navText = document.querySelectorAll('#navigationLink');
        let navHeader = document.querySelectorAll('.navEnd h4');
        let navP = document.querySelector('ul p')
        let menu = document.querySelector('.menu');
        let navButton = document.querySelector('.shrink-button');
        let dots = document.querySelectorAll('.dot');
    
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
    
        let dot = gsap.to(dots, {
          backgroundColor: "#322018",
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
            M.play();
            nButton.play();
            dot.play();
            },
            onLeaveBack: () => {
            navigation.reverse();
            nText.reverse();
            navH.reverse();
            nP.reverse();
            M.reverse();
            nButton.reverse();
            dot.reverse();
            },
        })
    })

    return(
        <div className='contact-section'>

            <div className='secOne'>
                <div className='C'>
                    <h1>Contact Us</h1>
                    <p className='CP'>Feel free to reach out to us for any questions or appointments. We are here to assist you with scheduling your next spa session.</p>
                    <p className='open'>We are open everyday: 10:00am - 21:00pm</p>

                    <Link to='https://web.whatsapp.com/'>
                        <button>Chat on Whatsapp</button>
                    </Link>
                </div>

                <div className='C-details'>
                    <p><strong>Phone Number:</strong> +66818230296</p>
                    <p><strong>Line & Kakao ID:</strong> josylee</p>
                    <p><strong>Email:</strong> josie835@gmail.com</p>
                </div>
            </div>

            <div className='cPic'>
                <img src={pic} loading="lazy" alt="massage"/>
            </div>
        </div>

       
    )
}