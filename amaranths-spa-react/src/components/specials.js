import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
//import gsap from 'gsap';
//import { ScrollTrigger } from "gsap/ScrollTrigger";
import AmaranthLogo from '../images/amaranth 2.png';
//import spaCandles from '../images/candles-spa.jpg';
//import banner3 from '../images/banner-3.jpg';
import './Specials.css';
import sunset from '../images/sunset2.jpg';
import couplesMassage from '../images/couplesMassage.jpg';
import korean from '../images/korean.jpg';
import detox from '../images/detox.jpg';
import lotus from '../images/lotus (1).png';




export default function Specials() {
    useEffect(() => {

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



     //SlideShow
     function slideShow() {
        let slideIndex = 0;

        const showSlides = (n) => {

        const slides = document.getElementsByClassName('mySlides');

        for(let i = 0; i < slides.length; i++){
            slides[i].style.display = "none";
        }

        slides[n].style.display = "block";
        }

        showSlides(slideIndex)
     }
     slideShow();
 
    })

    return(
        <div className='Specials-page'>

             <div className="specialsBanner">
                <div className='specialsText'>
                    <img src={AmaranthLogo} alt="logo"/>
                    <p>Immerse yourself in the purity of our Korean massages</p>
                    <h3>Amaranth Specials and Packages</h3>
                </div>

                <div className='specialsImage'>
                    <img className="s-image" src={sunset} alt="banner"/>
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

                <p className='call'>Call our <Link className='no-cursor'>number</Link> to book our monthly specials</p>
            </div>

            <hr/>

            <div className='Specials-discount-section'>
                <h2>Our Special Discounts</h2>
                <div className='discount slideShow-container'>
                    <div className='first-time-client mySlides'>
                        <div className='clientText'>
                            <h3 className='clientHeading'>First Time Client Discount</h3>
                            <p>Offer: 20% off the first service.</p>
                            <p>Valid: Ongoing for new customers.</p>
                        </div>
                       
                    </div>

                    <div className='loyalty-program mySlides'>
                        <div className='loyaltyText'>
                            <h3 className='loyltyHeading'>Loyalty Program</h3>
                            <p>Offer: Receive a free 30-minute massage or facial after 5 paid visits.</p>
                        </div>
                    </div>

                    <div className='birthday-specials mySlides'>
                        <div className='birthdayText'>
                            <h3 className='birthdayHeading'>Birthday Specials</h3>
                            <p>Offer: 20% off any treatment during your birthday month.</p>
                        </div>
                    </div>

                    <div className='arrows'>
                        <Link className='back'><i class="fa-solid fa-circle-arrow-left"  style={{ fontSize: '2rem' }}></i></Link>
                    
                        <Link className='forward'><i class="fa-solid fa-circle-arrow-right"  style={{ fontSize: '2rem' }}></i></Link>
                    </div>
                   

                    {/* <div className='dots'>
                        <div className='dot'></div>
                        <div className='dot'></div>
                        <div className='dot'></div>
                    </div> */}
                </div>

                <p><Link className='subscribe'>Subscribe</Link> to our email to get Special Discounts</p>
            </div>

            <div className='flower-line'>
                <div className='horizontal-line1'></div>
                <img src={lotus} alt="lotus"/>
                <div className='horizontal-line2'></div>
            </div>
            


            <div className='p-div'>
                <h2>View Our Packages</h2>
                <div className='p-container'>
                    <div className="container">
                        <div className="slide">

                        <Link href="#"><span data-cursor-text="View" data-cursor="-view">
                            <div className="item" style={{ backgroundImage: `url(${couplesMassage})`, backgroundSize:'cover', backgroundPosition: 'center' }}>
                                <div className="content">
                                    <div className="name">Couples Massage</div>
                                    <div className="des">Welcome ritual, side-by-side massage and foot ritual and post massage relaxation</div>
                                    <button>See More</button>
                                </div>
                            </div>
                        </span></Link>

                        <Link href="#"><span data-cursor-text="View" data-cursor="-view">
                            <div className="item" style={{ backgroundImage: `url(${korean})`, backgroundSize:'cover', backgroundPosition: 'center' }}>
                                <div className="content">
                                    <div className="name">Korean Massage</div>
                                    <div className="des">Welcome ritual, Korean body scrub, signature Korean massage, aromatherapy treatment and post massage relaxation</div>
                                    <button>See More</button>
                                </div>
                            </div>
                        </span></Link>

                        <Link href="#"><span data-cursor-text="View" data-cursor="-view">
                            <div className="item" style={{ backgroundImage: `url(${detox})`, backgroundSize:'cover', backgroundPosition: 'center' }}>
                                <div className="content">
                                    <div className="name">Detox Massage</div>
                                    <div className="des">Welcome ritual, body scrub, detoxifying body wrap, detox massage and post-treatment relaxation</div>
                                    <button>See More</button>
                                </div>
                            </div>
                        </span></Link>

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