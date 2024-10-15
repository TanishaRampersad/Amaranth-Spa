//import App from '../App.css';
import AmaranthLogo from '../images/amaranth 2.png';
import massage from '../images/3780085-hd_1920_1080_25fps.mp4';
import flower from '../images/Mediamodifier-Design.svg';
import React, { useEffect } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';


gsap.registerPlugin(ScrollTrigger);



export default function Home() {
    useEffect(() => {
       let heading = document.querySelector('.banner-text h3')
       let nav = document.querySelector('nav');
       let navText = document.querySelectorAll('nav li');
       let navHeader = document.querySelectorAll('ul h4');
       let navP = document.querySelector('ul p')
       let menu = document.querySelector('.menu');
       let navButton = document.querySelector('.shrink-button');

       let navigation = gsap.to(nav, {
        backgroundColor: "#EAE5DF",
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
        start: "top 10%",
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
    })
    return (
      <div className="Home">

        <div className="home-banner">
            <div className='banner-text'>
                <img src={AmaranthLogo} alt="logo"/>
                <p>Amaranth Spa and Massage - Thailand</p>
                <h3>Premium Korean Spa</h3>

                <div className='vertical-line'></div>
                <button className='specials-button'><img src={flower} alt=""/>Explore our Specials<img src={flower} alt=""/></button>
            </div>

            <video className='banner-video' autoPlay muted loop>
                <source src={massage} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

        </div>
      </div>
    );
  }