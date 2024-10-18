import '../components/home.css';
import AmaranthLogo from '../images/amaranth 2.png';
//import couples from '../images/3780085-hd_1920_1080_25fps.mp4';
import flower from '../images/Mediamodifier-Design.svg';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import lotus from '../images/lotus (1).png';
import amaranth from '../images/amaranth spa.png';
import candles from '../images/candles-spa.jpg';
import massage2 from '../images/massage 2.jpeg';
import massage3 from '../images/massage 3.jpg';
import korean from '../images/korean.jpg';
import detox from '../images/detox.jpg';
//import BWMassage from '../images/massage-black.jpg';
//import massageVid from '../images/6186694-uhd_2160_3840_25fps.mp4';
import couplesMassage from '../images/couplesMassage.jpg';
import bannerVideo from '../images/banner-vid.mp4';
import MouseFollower from "mouse-follower"; // Import the Mouse Follower library
import 'mouse-follower/dist/mouse-follower.min.css'; // Import its CSS


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
            '-no-cursor': '.hide-cursor'
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


    // Package slider
// let slideIndex = 0;
// const master = gsap.timeline({ repeatDelay: 1, paused: true });


// function packageSlider(panel) {
//   let tl = gsap.timeline(); 

//   let pSlider = document.getElementsByClassName('package-slider');
//   let packageTitle = document.querySelector(`.${panel} .packages`); // Targeting the class within the panel
//   let imageSection = document.querySelector(`.${panel} .image-section`);

//   if (slideIndex >= pSlider.length) {
//     slideIndex = 0;
//   }

//   // Hide all sliders before showing the current one
//   for (let i = 0; i < pSlider.length; i++) {
//     pSlider[i].style.display = "none";
//   }

//   pSlider[slideIndex].style.display = "block"; 

//   // Animate the text and image sections
//   // tl.from(packageTitle, {x:600, ease:"none", duration: 1})
//     tl.to(packageTitle, {opacity: 1, delay: 3})
//     tl.to(packageTitle, { x: -600, ease: "none", duration: 2}) 
//     .to(imageSection, { opacity: 0, duration: 0.5 }, "<")
//     // .set(pSlider[slideIndex], { display: "none" })
//     .call(() => {
//       slideIndex = (slideIndex + 1) % pSlider.length; // Update slideIndex for next animation
//       packageSlider(`panel${slideIndex + 1}`); // Call the next panel
//     }); // Call the next panel after the current one is hidden

//   return tl; // Return the timeline for this panel
// }

// // Master timeline to sequence the panels
// master.add(packageSlider("panel1"))
//   .add(packageSlider("panel2")) 
//   .add(packageSlider("panel3"));
// master.repeat(-1); // Repeat the animation infinitely

// packageSlider();



let slideIndex = 0;

function packageSlider() {
  // Grabbing all necessary elements
  let firstP = document.getElementsByClassName('gsap-couple')[0];
  let secondP = document.getElementsByClassName('gsap-korean')[0];
  let thirdP  = document.getElementsByClassName('gsap-detox')[0];

  let firstImage = document.getElementsByClassName('couple-image')[0];
  let secondImage = document.getElementsByClassName('korean-image')[0];
  let thirdImage = document.getElementsByClassName('detox-image')[0];

  let slider = document.getElementsByClassName('package-slider');
  
  let tl = gsap.timeline({ repeat: -1, paused: true }); // Repeats forever

  // Reset display of all slides
  for (let i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";
  }

  // Show the first slide at the start
  slider[slideIndex].style.display = "block";

  // Animate the first text moving left and image fading out
  tl.to(firstP, { x: -600, duration: 1, ease: "none", delay: 5 })
    .to(firstImage, { opacity: 0 }, "-=0.5") // Fade out the image while text moves

    // Animate second text coming from right and its image appearing
    .to(slider[slideIndex], { display: "none", duration: 0 })
    .to(slider[(slideIndex + 1) % slider.length], { display: "block", duration: 0 })
    .fromTo(secondP, { opacity: 0, x: 600 }, { opacity: 1, x: 0, duration: 2, ease: "power2.out" }, "<")
    .to(secondImage, { opacity: 1, duration: 0.5 }, "-=0.5")
    .to(secondP, { x: -600, duration: 1, ease: "none", delay: 5 })
    .to(secondImage, { opacity: 0 }, "-=0.5")
  
  
    .to(slider[(slideIndex + 1) % slider.length], { display: "none", duration: 0 })
    .to(slider[(slideIndex + 2) % slider.length], { display: "block", duration: 0 })
    .fromTo(thirdP, { opacity: 0, x: 600 }, { opacity: 1, x: 0, duration: 2, ease: "power2.out" }, "<")
    .to(thirdImage, { opacity: 1, duration: 0.5 }, "-=0.5")
    .to(thirdP, { x: -600, duration: 1, ease: "none", delay: 5 })
    .to(thirdImage, { opacity: 0 }, "-=0.5")

    ScrollTrigger.create({
      trigger: slider,
      start: "top 50%",
      onEnter: () => tl.play(),
      // onLeaveBack: () => tl.progess(0)
    })

    ScrollTrigger.create({
      trigger: slider,
      start: "top 100%",
      onEnter: () => tl.progress(0),
      // onLeaveBack: () => tl.progess(0)
    })

    ScrollTrigger.create({
      trigger: slider,
      start: "bottom 0%",
      onEnter: () => tl.progress(0),
      // toggleActions: "pause none none restart"
    })

  //tl.play();

  // Update slideIndex for the next loop
  slideIndex = (slideIndex + 1) % slider.length;
}

packageSlider();



    return () => {
      cursor.destroy(); // Cleanup to prevent memory leaks
    };
    
}, []);


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
                <source className="bannerV" src={bannerVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

        </div>


        <div className='spa-content'>
          <img className="amaranthSpa" src={amaranth} alt="amaranth"/>
          <img className="candles-spa" src={candles} alt="candles"/>
          <img className="massage2" src={massage2} alt="Massage"/>
          <img className="massage3" src={massage3} alt="Massage"/>

          <div className='spa-info'>
            <img src={lotus} alt="lotus"/>
            <h3>Enjoy lavish tranquility</h3>
            <p>Situated close to the airport. Here you will find the best Korean Massages right in the heart of Thailand. Welcome to Amaranth.</p>
            <button className='spa-button'><img src={flower} alt=""/>Experience our Spa<img src={flower} alt=""/></button>
          </div>
        </div>

        <hr/>


        <div className='Packages-section'>
          <h2>View Our Packages</h2>

          <div className='Packages-section1 package-slider panel1'>
            <Link href="#"><span data-cursor-text="View" data-cursor="-view">
              <div className='packages gsap-couple'>
                <p>Welcome ritual, side-by-side massage and foot ritual and post massage relaxation</p>
                <h3>Couples Package</h3>
                <img alt=""/>
              </div>

              <div className='image-section couple-image'>
                  <img className="couplesImage" src={couplesMassage} alt="couples massage"/>
              </div>
            </span></Link>
          </div>


          <div className='Packages-section2 package-slider panel2'>
            <Link href="#"><span data-cursor-text="View" data-cursor="-view">
              <div className='packages gsap-korean'>
                <p>Welcome ritual, Korean body scrub, signature Korean massage, aromatherapy treatment and post massage relaxation</p>
                <h3>Signature Korean Massage Package</h3>
                <img alt=""/>
              </div>

              <div className='image-section korean-image'>
                  <img className="KoreanImage" src={korean} alt="couples massage"/>
              </div>
            </span></Link>
          </div>


          <div className='Packages-section3 package-slider panel3'>
            <Link href="#"><span data-cursor-text="View" data-cursor="-view">
              <div className='packages gsap-detox'>
                <p>Welcome ritual, body scrub, detoxifying body wrap, detox massage and post-treatment relaxation</p>
                <h3>Detox Package</h3>
                <img alt=""/>
              </div>

              <div className='image-section detox-image'>
                  <img className="detoxImage" src={detox} alt="couples massage"/>
              </div>
            </span></Link>
          </div>

    
          <div className='package-extra-image'></div>

          <div className="dots-container hide-cursor">
              <span onclick="currentSlide(0)" className='dots'></span>
              <span onClick="currentSlide(1)" className='dots'></span>
              <span onClick="currentSlide(2)" className='dots'></span>
            </div>

        </div>


        <div className='flower-line'>
          <div className='horizontal-line1'></div>
          <img src={lotus} alt="lotus"/>
          <div className='horizontal-line2'></div>
        </div>


      </div>
    );
  }