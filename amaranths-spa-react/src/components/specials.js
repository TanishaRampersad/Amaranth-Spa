import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AmaranthLogo from '../images/amaranth 2.png';
//import spaCandles from '../images/candles-spa.jpg';
//import banner3 from '../images/banner-3.jpg';
import './Specials.css';
import sunset from '../images/sunset2.jpg';
import couplesMassage from '../images/couplesMassage.jpg';
import korean from '../images/korean.jpg';
import detox from '../images/detox.jpg';
import lotus from '../images/lotus (1).png';
//import { Splide, SplideSlide } from '@splidejs/react-splide';
import { HashLink as Link} from 'react-router-hash-link';
import '@splidejs/splide/dist/css/splide.min.css';



export default function Specials() {
    useEffect(() => {

    let heading = document.querySelector('.specialsBanner h3')
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



    const slides = document.querySelector(".mySlides");

    function getScrollAmount() {
        let slideWidth = slides.scrollWidth;
        return -(slideWidth - window.innerWidth); //if the windowsinnerwidth is smaller, then were subtracting less on the racesWidth. Which means the racesWidth will have a bigger number 
    }

    const tween = gsap.fromTo(slides, { x: 0 }, { 
        x: getScrollAmount,
        duration: 3,
        ease: "none",
    });


    ScrollTrigger.create({
        trigger:".Specials-discount-section",
        start:"2% top",
        end: () => `+=${getScrollAmount() * -1}`,
        pin:true,
        animation:tween,
        scrub:1, //1-second delay.
        invalidateOnRefresh:true,
        markers:true
    })

 
    })

   
    return(
        <div className='Specials-page'>

             <div className="specialsBanner">
                <div className='specialsText'>
                    <img src={AmaranthLogo} loading="lazy" alt="logo"/>
                    <p>Immerse yourself in the purity of our Korean massages</p>
                    <h3>Amaranth Specials and Packages</h3>
                </div>

                <div className='specialsImage'>
                    <img className="s-image" src={sunset} loading="lazy" alt="banner"/>
                </div>
            </div>


            <div className='monthly-specials'>
                <h2>Our Monthly Specials</h2>

                <div className='specials-container'>
                    <div className='winterSpecials'>
                        <div className='winterText'>
                            <p className='WS'>Winter Specials</p>
                            <div className='line-height'>
                                <p>15% off any 90 minute massage or facial</p>
                                <p>Free 30 minute Korean body scrub</p>
                                <p className='winter-valid'>Valid for the entire month of December</p>
                            </div>
                        </div>
                    </div>
                        
                    
                    <div className='holiday-pampering'>
                        <div className='holidayText'>
                            <p className='HP'>Holiday Pampering</p>
                            <div className='line-height'>
                                <p>Book a 90 minute massage and get a complimentary 30 minute  foot massage</p>
                                <p className='holiday-valid'>Valid for the entire month of January</p>
                            </div>
                        </div>
                    </div>

                    <div className='sweetheart-special'>
                        <div className='sweetheartText'>
                            <p className='SS'>Sweetheart Special (Couples Massage)</p>
                            <div className='line-height'>
                                <p>Book a couples massage and receive 20% off and a complimentary bottle of champagne.</p>
                                <p>Free chocolate truffles for each couple</p>
                                <p className='sweetheart-valid'>Valid for the entire month of February</p>
                            </div>
                        </div>
                    </div>

                </div>

                <p className='call'>Call our <a className='no-cursor' href="tel:+66819810932">number</a> to book our monthly specials</p>
            </div>

            <hr/>

            <div className='Specials-discount-section'>
                <h2>Our Special Discounts</h2>


                <div className='slideShow-container'>
                    <div className='mySlides'>
                        <div className='clientText'>
                            <h3 className='clientHeading'>First Time Client Discount</h3>
                            <p>Offer: 20% off the first service.</p>
                            <p>Valid: Ongoing for new customers.</p>
                        </div>
                       
                   
                        <div className='loyaltyText'>
                            <h3 className='loyltyHeading'>Loyalty Program</h3>
                            <p>Offer: Receive a free 30-minute massage or facial after 5 paid visits.</p>
                        </div>
                    
                    
                        <div className='birthdayText'>
                            <h3 className='birthdayHeading'>Birthday Specials</h3>
                            <p>Offer: 20% off any treatment during your birthday month.</p>
                        </div>
                    </div>

                    {/* <div className='arrows'>
                        <Link className='back'><i class="fa-solid fa-circle-arrow-left"  style={{ fontSize: '2rem' }}></i></Link>
                    
                        <Link className='forward'><i class="fa-solid fa-circle-arrow-right"  style={{ fontSize: '2rem' }}></i></Link>
                    </div> */}
                </div>

                {/* <p><Link className='subscribe'>Subscribe</Link> to our email to get Special Discounts</p> */}
            </div>

            <div className='flower-line'>
                <div className='horizontal-line1'></div>
                <img src={lotus} loading="lazy" alt="lotus"/>
                <div className='horizontal-line2'></div>
            </div>
            


            <div className='p-div'>
                <h2>View Our Packages</h2>
                <div className='p-container'>
                    <div className="container">
                        <div className="slide">

                        {/* <Link href="#"><span data-cursor-text="View" data-cursor="-view"> */}
                            <div className="item" style={{ backgroundImage: `url(${couplesMassage})`, backgroundSize:'cover', backgroundPosition: 'center' }}>
                                <div className="content">
                                    <div className="name">Couples Massage</div>
                                    <div className="des">Welcome ritual, side-by-side massage and foot ritual and post massage relaxation</div>
                                    <Link className="see-more" smooth to="/packages#top">
                                        <button>See More</button>
                                    </Link>
                                </div>
                            </div>
                        {/* </span></Link> */}

                        {/* <Link href="#"><span data-cursor-text="View" data-cursor="-view"> */}
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

                        {/* <Link href="#"><span data-cursor-text="View" data-cursor="-view"> */}
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


        </div>
    )
}

window.onload = function(event){
    Specials();
  };
