import '../components/home.css';
import AmaranthLogo from '../images/amaranth 2.png';
//import couples from '../images/3780085-hd_1920_1080_25fps.mp4';
import flower from '../images/Mediamodifier-Design.svg';
import React, { useEffect } from 'react';
//import { Link } from 'react-router-dom';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import lotus from '../images/lotus (1).png';
import amaranth from '../images/amaranth spa.png';
import candles from '../images/candles-spa.jpg';
import massage2 from '../images/massage 2.jpeg';
import massage3 from '../images/massage 3.jpg';
import korean from '../images/korean.jpg';
import detox from '../images/detox.jpg';
//import overlay1 from '../images/overlay1.jpg';
//import overlay2 from '../images/0verlay2.jpg';
//import overlay3 from '../images/overlay3.jpg';
//import overlay4 from '../images/overlay4.jpg';
//import therapist from '../images/black&white.jpg';
//import BWMassage from '../images/massage-black.jpg';
//import massageVid from '../images/6186694-uhd_2160_3840_25fps.mp4';
import couplesMassage from '../images/couplesMassage.jpg';
import bannerVideo from '../images/banner-vid.mp4';
import { HashLink as Link} from 'react-router-hash-link';



gsap.registerPlugin(ScrollTrigger);



export default function Home() {
    useEffect(() => {

    let heading = document.querySelector('.banner-text h3')
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

// Package slider
// let slideIndex = 0;

// function packageSlider() {
//   // Grabbing all necessary elements
//   let firstP = document.getElementsByClassName('gsap-couple')[0];
//   let secondP = document.getElementsByClassName('gsap-korean')[0];
//   let thirdP  = document.getElementsByClassName('gsap-detox')[0];

//   let firstImage = document.getElementsByClassName('couple-image')[0];
//   let secondImage = document.getElementsByClassName('korean-image')[0];
//   let thirdImage = document.getElementsByClassName('detox-image')[0];

//   let slider = document.getElementsByClassName('package-slider');
  
//   let tl = gsap.timeline({ repeat: -1, paused: true }); // Repeats forever

//   // Reset display of all slides
//   for (let i = 0; i < slider.length; i++) {
//     slider[i].style.display = "none";
//   }

//   // Show the first slide at the start
//   slider[slideIndex].style.display = "block";

//   // Animate the first text moving left and image fading out
//   tl.to(firstP, { x: -600, duration: 1, ease: "none", delay: 5 })
//     .to(firstImage, { opacity: 0, duration: 0.1 }, "-=0.5") // Fade out the image while text moves

//     // Animate second text coming from right and its image appearing
//     .to(slider[slideIndex], { display: "none", duration: 0 }, ">")  //hide current slide
//     .to(slider[(slideIndex + 1) % slider.length], { display: "block", duration: 0 }, "-=0.4") //show next slide
//     .fromTo(secondP, { opacity: 0, x: 600 }, { opacity: 1, x: 0, duration: 1, ease: "power2.in" }, "<")
//     .fromTo(secondImage, {opacity: 0, ease: "power2.in", duration: 0.1}, { opacity: 1, duration: 0.5, ease: "power2.in" }, "<")
//     .to(secondP, { x: -600, duration: 1, ease: "none", delay: 5 })
//     .to(secondImage, { opacity: 0, duration: 0.01 }, "-=0.5")
  
  
//     .to(slider[(slideIndex + 1) % slider.length], { display: "none", duration: 0 }, ">")
//     .to(slider[(slideIndex + 2) % slider.length], { display: "block", duration: 0 }, "-=0.48")
//     .fromTo(thirdP, { opacity: 0, x: 600 }, { opacity: 1, x: 0, duration: 1, ease: "power2.in" }, "<")
//     .fromTo(thirdImage,{opacity: 0, ease: "power2.in", duration: 0.1}, { opacity: 1, duration: 0.5, ease: "power2.in" } , "<")
//     .to(thirdP, { x: -600, duration: 1, ease: "none", delay: 5 })
//     .to(thirdImage, { opacity: 0, duration: 0.1 }, "-=0.5")

//     ScrollTrigger.create({
//       trigger: slider,
//       start: "top 50%",
//       onEnter: () => tl.play(),
//     })

//     ScrollTrigger.create({
//       trigger: slider,
//       start: "top 100%",
//       onEnter: () => tl.progress(0),
//     })

//     ScrollTrigger.create({
//       trigger: slider,
//       start: "bottom 50%",
//       onEnter: () => tl.pause(),
//       onLeaveBack: () => tl.play()
//     })

//     ScrollTrigger.create({
//       trigger: slider,
//       start: "bottom 0%",
//       onEnter: () => tl.progress(0),
//     })

//   // Update slideIndex for the next loop
//   slideIndex = (slideIndex + 1) % slider.length;
// }

// packageSlider();


//Package Slider Section

function packageSlider() {
  // let next = document.querySelector('.next')
  let prev = document.querySelector('.prev')

  window.onload = () => {
      let images = document.querySelectorAll('.item');
      images.forEach((img) => {
          let image = new Image();
          image.src = img.style.backgroundImage.slice(5, -2); // Preload the background images
      });
  };
  
  // next.addEventListener("click", ()=> {
  //     let items = document.querySelectorAll('.item')
  //     document.querySelector('.slide').appendChild(items[0]);
  // })

  prev.addEventListener("click", ()=> {
      let items = document.querySelectorAll('.item')
      document.querySelector('.slide').prepend(items[items.length - 1])
  })
}

packageSlider();

document.addEventListener("DOMContentLoaded", ()=> {
  packageSlider();
})



// Form update after user interaction
let submit = document.querySelector('.submit');
let input = document.querySelectorAll('form input');
let select = document.getElementById("mySelect");

submit.addEventListener('click', () => {

  submit.textContent = 'Sent !';
  submit.style.backgroundColor = " #767675";
  submit.style.padding = '0.6rem 2rem';
  submit.style.color = 'white';
  submit.style.width = '7.3rem';
  submit.style.marginTop = '2rem';


  input.forEach(input => {
    input.value = "";
  });

  select.selectedIndex = 0; // Reset to the first option
  
  setTimeout(function() {

    // Change button text back to "Send" after processing completes
    submit.textContent = "Submit";
    submit.style.backgroundColor = "#903C02";
  }, 3000); // Adjusted the delay 
  
})


let spaButton = document.querySelector('.massages-link');

spaButton.addEventListener('click', () => {
  gsap.to(window, { duration: 1, scrollTo: { y: 0, autoKill: true } });
})


// Spa content Image animation

// let overlay = document.querySelectorAll('.overlayImage1');
// let imageSpa = document.querySelectorAll('.amaranthSpa');


// let tl = gsap.timeline({repeat: -1, yoyo: true});

// tl.to(imageSpa, {y: "-100%", delay: 3 })
// .fromTo(overlay, { y: "0%"}, { y: "-100%"},"<"); // Move back off-screen



// tl.play()

window.scrollTo(0, 0); // Scrolls to the top on load
    
}, []);


    return (
      <div className="Home">

        <div className="home-banner">
            <div className='banner-text'>
                <img src={AmaranthLogo} alt="logo"/>
                <p>Amaranth Spa and Massage - Thailand</p>
                <h3>Premium Korean Spa</h3>

                <div className='vertical-line'></div>
                <Link className="link" to="/specials">
                  <button className='specials-button'><img src={flower} loading="lazy" alt=""/>Explore our Specials<img src={flower} alt=""/></button>
                </Link>
            </div>

            <div className="video-banner">
              <video className='banner-video' autoPlay muted loop>
                  <source className="bannerV" src={bannerVideo} type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
            </div>

        </div>


        <div className='spa-content'>

          <div className='firstHalf'>
            <div className='amaranth-image-container'>
              <img className="amaranthSpa imageSpa" src={amaranth} loading="lazy" alt="amaranth"/>
            </div>
        
            <div className='candles-image-container'>
              <img className="candles-spa imageSpa" src={candles} loading="lazy" alt="candles"/>
            </div>
          </div>

          

          <div className='spa-info'>
            <img src={lotus} alt="lotus"/>
            <h3>Enjoy lavish tranquility</h3>
            <p>Situated close to the airport. Here you will find the best Korean Massages right in the heart of Thailand. Welcome to Amaranth.</p>

            <Link className="massages-link" smooth to="/massages#top">
              <button className='spa-button'><img src={flower} alt=""/>Experience our Spa<img src={flower} alt=""/></button>
            </Link>
          </div>



          <div className='secondHalf'>
            <div className='stones-image-container'>
              <img className="massage2 imageSpa" src={massage2} loading="lazy" alt="Massage"/>
            </div>

            <div className='relax-image-container'>
              <img className="massage3 imageSpa" src={massage3} loading="lazy" alt="Massage"/>
            </div>
          </div>
        </div>

        <hr/>


    <div className='p-div'>
      <h2>View Our Packages</h2>
        <div className='p-container'>
          <div className="container">
            <div className="slide">

              {/* <Link href="#"><span data-cursor-text="View"> */}
                <div className="item" style={{ backgroundImage: `url(${couplesMassage})`, backgroundSize:'cover', backgroundPosition: 'center', position: 'absolute' }}>
                      <div className="content">
                          <div className="name">Couples Massage</div>
                          <div className="des">Welcome ritual, side-by-side massage, foot ritual and post massage relaxation</div>
                          <Link className="see-more" smooth to="/packages#top">
                            <button>See More</button>
                          </Link>
                      </div>
                  </div>
              {/* </span></Link> */}

              {/* <Link href="#"><span data-cursor-text="View"> */}
                <div className="item" style={{ backgroundImage: `url(${korean})`, backgroundSize:'cover', backgroundPosition: 'center' }}>
                    <div className="content">
                        <div className="name">Korean Massage</div>
                        <div className="des">Welcome ritual, Korean body scrub, signature Korean massage, aromatherapy treatment and post massage relaxation</div>
                        <Link className="see-more" smooth to="/packages#top">
                          <button>See More</button>
                        </Link>
                    </div>
                </div>
              {/* </span></Link> */}

              {/* <Link href="#"><span data-cursor-text="View"> */}
                <div className="item" style={{ backgroundImage: `url(${detox})`, backgroundSize:'cover', backgroundPosition: 'center' }}>
                    <div className="content">
                        <div className="name">Detox Massage</div>
                        <div className="des">Welcome ritual, body scrub, detoxifying body wrap, detox massage and post-treatment relaxation</div>
                        <Link className="see-more" smooth to="/packages#top">
                          <button>See More</button>
                        </Link>
                    </div>
                </div>
              {/* </span></Link> */}

            </div>

              <div className="button">
                <button className="prev"><i className="fa-solid fa-arrow-right"></i></button>
                {/* <button class="next"><i class="fa-solid fa-arrow-right"></i></button> */}
              </div>

          </div>
        </div>
    </div>

        <div className='flower-line'>
          <div className='horizontal-line1'></div>
          <img src={lotus}  loading="lazy" alt="lotus"/>
          <div className='horizontal-line2'></div>
        </div>


        <div className='booking-section'>
          <h1>Make a Booking</h1>

          <div className="form" id="form">
            <form>
              <label htmlFor="userName">Name</label>
              <input type="text" id="userName" name="user-name"></input>
              <label htmlFor="userEmail">Email</label>
              <input type="text" id="userEmail" name="user-email"></input>
              <label htmlFor="selection">Select Treatment or Package</label>
              <select id="mySelect" htmlFor="selection">
                <option>Select a service</option>
                <option>Basic Facial Treatment - 60min</option>
                <option>Korean Body Scrub - 60min</option>
                <option>Korean Full Body Care - 120min</option>
                <option>Amaranth Signature Facial Treatment - 90min</option>
                <option>Ultrasound Whitening - 90min</option>
                <option>Aroma Oil Massage - 60min</option>
                <option>Aroma Oil Massage - 90min </option>
                <option>Electrophoresis Whitening - 90min</option>
                <option>Ultrasound Facelifting - 100min</option>
                <option>Noble Facelifting - 120min</option>
                <option>Black Facial Therapy - 120min</option>
                <option>Waterdrop Ultrasound Facelifting - 100min</option>
                <option>Gold Facial Therapy - 120min</option>
                <option>HIFU - x min</option>
                <option>Head & Shoulder Massage - 60min</option>
                <option>Royal Thai Traditional Massage - 60min</option>
                <option>Royal Thai Traditional Massage - 90min</option>
                <option>Swedish Massage - 60min</option>
                <option>Swedish Massage - 90min</option>
                <option>Sports Massage - 60min</option>
                <option>Sports Massage - 90min</option>
                <option>Couples Massage Package - 2 hours</option>
                <option>Signature Korean Massage Package - 2 hours</option>
                <option>Detox Package - 3 hours</option>
              </select>
              <label htmlFor="date">Select a date</label>
              <input type="date" id="start-date" name="start-date"></input>
              <div className='submit'><input type="submit" value="Submit"></input></div>
            </form>
          </div>
        </div>


      </div>
    );
  };

  // window.onload = function(event){
  //   Home();
  // };
