import React, { useEffect } from 'react';
import AmaranthLogo from '../images/amaranth 2.png'
import trees from '../images/trees.jpg';
import blackAndWhite from '../images/blackandwhite.jpg';
import lotus from '../images/lotus (1).png';
import oil from '../images/oil.jpg';
import './Massage.css';
//import { Link } from 'react-router-dom';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import { HashLink as Link} from 'react-router-hash-link';
// import MouseFollower from "mouse-follower"; // Import the Mouse Follower library
// import 'mouse-follower/dist/mouse-follower.min.css'; // Import its CSc


export default function Massage() {
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
            M.play()
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

        // const cursor = new MouseFollower({
        //     el: null,
        //     container: document.body,
        //     className: 'mf-cursor',
        //     innerClassName: 'mf-cursor-inner',
        //     textClassName: 'mf-cursor-text',
        //     mediaClassName: 'mf-cursor-media',
        //     mediaBoxClassName: 'mf-cursor-media-box',
        //     iconSvgClassName: 'mf-svgsprite',
        //     iconSvgNamePrefix: '-',
        //     iconSvgSrc: '',
        //     dataAttr: 'cursor',
        //     hiddenState: '-hidden',
        //     textState: '-text',
        //     iconState: '-icon',
        //     activeState: '-active',
        //     mediaState: '-media',
        //     stateDetection: {
        //         '-pointer': 'a,button',
        //         '-hidden': 'iframe',
        //         '-view': '[data-cursor="-view"]',
        //         '-no-cursor': '.hide-cursor',
        //         '-expand': 'expand'
        //     },
        //     visible: true,
        //     visibleOnState: false,
        //     speed: 0.55,
        //     ease: 'expo.out',
        //     overwrite: true,
        //     skewing: 0,
        //     skewingText: 0,
        //     skewingIcon: 2,
        //     skewingMedia: 2,
        //     skewingDelta: 0.001,
        //     skewingDeltaMax: 0.15,
        //     stickDelta: 0.15,
        //     showTimeout: 20,
        //     hideOnLeave: true,
        //     hideTimeout: 300,
        //     hideMediaTimeout: 300
        // });
    
        // document.addEventListener("DOMContentLoaded", function () {
        //   new MouseFollower();  // or your specific initialization
        // });


        gsap.registerPlugin(ScrollTrigger);

        // Parallax effect for image-section
        // gsap.to(".background-image1", {
        //     scrollTrigger: {
        //         trigger: ".image-section",
        //         start: "top top", 
        //         end: "bottom 50%", 
        //         scrub: true, 
        //         onLeave: () => gsap.set(".background-image1", { y: "30%" })
        //     },
        //     y: "30%", 
        //     ease: "none", 

        // });

          // Parallax effect for image-section
        //   gsap.to(".background-image2", {
        //     scrollTrigger: {
        //         trigger: ".image-section",
        //         start: "top top", 
        //         end: "bottom 50%", 
        //         scrub: true, 
        //         onLeave: () => gsap.set(".background-image2", { y: "30%" })
        //     },
        //     y: "30%", 
        //     ease: "none", 
        //     scrub: true,
        // });

        // Parallax effect for image-section
        // gsap.to(".background-image3", {
        //     scrollTrigger: {
        //         trigger: ".image-section",
        //         start: "top top", 
        //         end: "bottom 50%", 
        //         scrub: true, 
        //         onLeave: () => gsap.set(".background-image3", { y: "30%" })
        //     },
        //     y: "30%", 
        //     ease: "none", 
        //     scrub: true,
        // });

       

        // window.addEventListener('scroll', function() {
        //   const background = document.querySelector('.background-image1');
        //   let scrollPosition = window.pageYOffset; // Get scroll position
        //   let offset = Math.min(scrollPosition * 0.25, 100); // Adjust the parallax speed and cap the movement
        //   background.style.backgroundPositionY = `calc(100% - ${offset}px)`; // Moves the image up slightly from the bottom
        // });


        function toggleAnimation() {
            let plus = document.querySelectorAll('.plus-icon');
            let Hline = document.querySelectorAll('.h-line');
            let details = document.querySelectorAll('.m-details');

            plus.forEach((icon, index) => {
                details.forEach((detail, index) => {
                    icon.addEventListener('click', () => {
                        let animation  = gsap.to(Hline[index], {
                            rotate: '-90',
                            duration: 1,
                            ease: 'power2.out',
                            transformOrigin: "-50% 50%"
                            // onToggle:(self)=>{
                            //     self.animation.reversed(!self.isActive)
                            //   }
                        });
    
                        details[index].computedStyleMap.display = 'block'
    
                                // Attach the click event to toggle the animation state
                        plus[index].addEventListener('click', () => {
                            animation.reversed(!animation.reversed()); // Toggle animation direction
                            animation.play(); // Play in whichever direction it’s toggled to
                        });
                    });
                })
                
            });
        }

        toggleAnimation();


        let plusIcon = document.querySelectorAll('.plus');

        plusIcon.forEach((plus) => {
            plus.addEventListener('click', () => {
                // Rotate the vertical line
                let vLines = plus.querySelectorAll('.V-line'); // Select only the V-lines inside the clicked plus icon
                vLines.forEach((vLine) => {
                    gsap.to(vLine, { rotate: '-90deg', duration: 0.5 });
                });
        
                // Show the details
                
                let massageDetails = plus.querySelectorAll('.m-details'); // Assuming .m-details is inside each .plus
                massageDetails.forEach((detail) => {
                    // First, set display to block without animating
                    //gsap.set(detail, { display: 'none', opacity: 0, autoAlpha: 0 });

                    gsap.to(detail, {display:'block'})
                });
            });


        });

        // window.scrollTo(0, 0);



        // return () => {
        //     cursor.destroy(); // Cleanup to prevent memory leaks
        //   }; 

    })

    return(
        <div className='massage-page'>

            <div id="top"></div>

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
                        <img className="massageImage" src={trees} loading="lazy" alt="banner"/>
                    </div>
            </div>

            <div className='massage-second-image'>
                <img className="massage-therapist" src={blackAndWhite} loading="lazy" alt="Massage therapist"/>
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


            <div className='image-section'>
                <div className='image1'>
                    <div class="background-image1">
                        <div class="overlay"></div>
                    </div>
                </div>

                <div className='image2'>
                    <div class="background-image2">
                        <div class="overlay"></div>
                    </div>
                </div>

                <div className='image3'>
                    <div class="background-image3">
                        <div class="overlay"></div>
                    </div>
                </div>
            </div>

            <div className='organic-wellbeing'>
                
                    <img className="flower" src={lotus} loading="lazy" alt="logo"/>
                    <h2>Organic well-being</h2>
                    <p>Experience the essence of Korean quality and beauty at our spa. Our treatments are inspired by traditional Korean practices, use high-quality, natural ingredients to rejuvenate your skin and soothe your soul. Discover the renowned effectiveness and luxury of Korean skincare and massage techniques.</p>
                    <div className='e-oil'>
                        <img src={oil} loading="lazy"  alt="essential oil"/>
                    </div>
                    <h2 className='incl'>Included in every appointment</h2>
                    <ul>
                        <li>✓ Your own professional masseuse</li>
                        <li>✓ Quality ingredients & technique</li>
                        <li>✓ Bathrobe, slippers, & shower</li>
                        <li>✓ Fresh towels and linens</li>
                        <li>✓ Tea, Coffee, Water & other refreshments</li>
                        <li>✓ Post-treatment skincare advice</li>
                        <li>✓ Relaxing ambiance music</li>
                    </ul>
            </div>

            <hr/>


            <div className='massage-cost'>
                <div className='facial-treatments-section'>

                    <div className='subsectionOne'>
                        <h2>Facial Treatments</h2>
                        <p className='item'>(click on item for details)</p>

                        <div className='massage-subsection'>
                            <div className='inline'>
                                <h3>Basic Facial Treatment - ฿1,000</h3>
                                <div className='plus'>
                                    <button><div className='H-line'></div></button>
                                    <button><div className='V-line'></div></button>
                                </div>
                                {/* <div className='lines'>
                                    {/* <button><div className='B-line'></div></button> 
                                    <button class="plus-icon">
                                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                            <line class="v-line" x1="12" y1="4" x2="12" y2="20" stroke="#322018" stroke-width="2"/>
                                            <line class="h-line" x1="4" y1="12" x2="20" y2="12" stroke="#322018" stroke-width="2"/>
                                        </svg>
                                    </button>
                                </div> */}
                            </div>
                            <div className='m-details'>
                                <p className='details-p'>A relaxing facial massage that will moisturize and rejuvenate your skin using natural ingredients like seaweed, egg yolks, honey, grains, and Korean herbs. Combined with cleansing your pores and removing your blackheads.</p>
                                <h4>60 Minutes</h4>
                            </div>
                            <hr className='hr'/>
                        </div>


                        <div className='massage-subsection'>
                            <div className='inline'>
                                <h3>Amaranth Signature Facial Treatment - ฿1,300</h3>
                                <div className='plus'>
                                    <button><div className='H-line'></div></button>
                                    <button><div className='V-line'></div></button>
                                </div>
                            </div>
                            <div className='m-details'>
                                <p className='massage-p'>A relaxing facial massage that will moisturise and rejuvenate your skin using natural ingredients like seaweed, egg yolks, honey, grains, and Korean herbs. Combined with cleansing your pores and removing your blackheads.</p>
                                <p className='massage-second'>Combined with a Full Body Massage to relax your day and relieve muscle tension.</p>
                                <h4>90 Minutes</h4>
                            </div>
                            <hr className='hr'/>
                        </div>

                        <div className='massage-subsection'>
                            <div className='inline'>
                                <h3>Ultrasound Whitening - ฿1,300</h3>
                                <div className='plus'>
                                    <button><div className='H-line'></div></button>
                                    <button><div className='V-line'></div></button>
                                </div>
                            </div>
                            <div className='m-details'>
                                <p className='massage-p'>Treat yourself with healthier and brighter skin. We reduce freckles, Discoloration’s, Dark Circles, Dark Spots, Acne, and Large Pores on your face. </p>
                                <p className='massage-second'>Our treatment includes the use of an Ultrasound Machine and Vitamin A & C serums. Reward yourself and book now.</p>
                                <h4>90 Minutes</h4>
                            </div>
                            <hr className='hr'/>
                        </div>

                        <div className='massage-subsection'>
                            <div className='inline'>
                                <h3>Electrophoresis Whitening - ฿1,800</h3>
                                <div className='plus'>
                                    <button><div className='H-line'></div></button>
                                    <button><div className='V-line'></div></button>
                                </div>
                            </div>
                            <div className='m-details'>
                                <p className='massage-p'>Our exclusive whitening treatment using an electrophoresis machine will reduce freckles, discolorations, dark circles, dark spots, acne and large pores on your face.</p>
                                <p className='massage-second'>This Treatment boosts your face to look brighter, and stimulates the deeper layer of skin to produce more collagen. </p>
                                <h4>90 Minutes</h4>
                            </div>
                            <hr className='hr'/>
                        </div>

                        <div className='massage-subsection'>
                            <div className='inline'>
                                <h3>Ultrasound Facelifting - ฿1,800</h3>
                                <div className='plus'>
                                    <button><div className='H-line'></div></button>
                                    <button><div className='V-line'></div></button>
                                </div>
                            </div>
                            <div className='m-details'>
                                <p className='details-p'>Treat yourself with this quick and easy facelift. Japanese collagen gel and the use of ultrasound technology will gently enhance your face to emphasise your beauty. This treatment will lift hanging cheeks and reduce wrinkles.</p>
                                <h4>100 Minutes</h4>
                            </div>
                            <hr className='hr'/>
                        </div>

                        <div className='massage-subsection'>
                            <div className='inline'>
                                <h3>Noble Facelifting - ฿2,500</h3>
                                <div className='plus'>
                                    <button><div className='H-line'></div></button>
                                    <button><div className='V-line'></div></button>
                                </div>
                            </div>
                            <div className='m-details'>
                                <p className='massage-p'>Feel and look younger with our House Specialty treatment for those who desire luxury and beauty.</p>
                                <p className='massage-second'>This treatment includes seaweed handling, ultrasonic face lifting, collagen pearl masks, moisturising serums and more.</p>
                                <h4>120 Minutes</h4>
                            </div>
                            <hr className='hr'/>
                        </div>

                        <div className='massage-subsection'>
                            <div className='inline'>
                                <h3>Black Facial Therapy - ฿3,000</h3>
                                <div className='plus'>
                                    <button><div className='H-line'></div></button>
                                    <button><div className='V-line'></div></button>
                                </div>
                            </div>
                            <div className='m-details'>
                                <p className='details-p'>A deep cleanse of your face, getting rid of all impurities from inside your pores. The Black Facial Therapy facial treatment will leave you feeling fresh and moisturised. Using Korean serums and masks, your face will look and feel younger. </p>
                                <h4>120 Minutes</h4>
                            </div>
                            <hr className='hr'/>
                        </div>

                        <div className='massage-subsection'>
                            <div className='inline'>
                                <h3>Gold Facial Therapy - ฿5,000</h3>
                                <div className='plus'>
                                    <button><div className='H-line'></div></button>
                                    <button><div className='V-line'></div></button>
                                </div>
                            </div>
                            <div className='m-details'>
                                <p  className='details-p'>Embrace the opulence of our Gold Facial Therapy, a luxurious treatment utilising precious gold to revitalise your complexion and bestow an unparalleled, youthful glow.</p>
                                <h4>120 Minutes</h4>
                            </div>
                            <hr className='hr'/>
                        </div>

                        <div className='massage-subsection'>
                            <div className='inline'>
                                <h3>HIFU - ฿5,000</h3>
                                <div className='plus'>
                                    <button><div className='H-line'></div></button>
                                    <button><div className='V-line'></div></button>
                                </div>
                            </div>
                            <div className='m-details'>
                                <p className='details-p'>Experience the power of HIFU, a non-invasive treatment employing focused ultrasound energy to tighten and lift skin, revealing a more youthful, contoured appearance.</p>
                                <h4>x Minutes</h4>
                            </div>
                            <hr className='hr'/>
                        </div>

                        <div className='massage-subsection'>
                            <div className='inline'>
                                <h3>Head & Shoulder Massage - ฿750</h3>
                                <div className='plus'>
                                    <button><div className='H-line'></div></button>
                                    <button><div className='V-line'></div></button>
                                </div>
                            </div>
                            <div className='m-details'>
                                <p className='details-p'>Enjoy our fantastic new head & shoulder massage. Unwind with our focused massage, targeting tension in the neck, shoulders, and scalp for quick, effective stress relief.</p>
                                <h4>60 Minutes</h4>
                            </div>
                            <hr className='hr'/>
                        </div>
                    </div>



                    <div className='subsectionTwo'>
                        <h2>Body Massages</h2>
                        <p className='item'>(click on item for details)</p>

                        <div className='massage-subsection'>
                            <div className='inline'>
                                <h3>Korean Body Scrub - ฿1,200</h3>
                                <div className='plus'>
                                    <button><div className='H-line'></div></button>
                                    <button><div className='V-line'></div></button>
                                </div>
                            </div>
                            <div className='m-details'>
                                <p className='details-p'>Breathtaking Relaxation taken to a new level. Come enjoy a Sauna, Jacuzzi, Korean traditional body scrub, and yoghurt massage. This body scrub will leave your skin feeling brand new. </p>
                                <h4>60 Minutes</h4>
                            </div>
                            <hr className='hr'/>
                        </div>

                        <div className='massage-subsection'>
                            <div className='inline'>
                                <h3>Korean Full Body Care - ฿2,000</h3>
                                <div className='plus'>
                                    <button><div className='H-line'></div></button>
                                    <button><div className='V-line'></div></button>
                                </div>
                            </div>
                            <div className='m-details'>
                                <p className='details-p'>Experience our Korean Full Body Care Massage, featuring an aroma oil massage and traditional Korean body scrub. Relax as skilled masseuse’s dissolve tension and deliver unparalleled warmth, relaxation, and beauty</p>
                                <h4>120 Minutes</h4>
                            </div>
                            <hr className='hr'/>
                        </div>

                        <div className='massage-subsection'>
                            <div className='inline'>
                                <h3>Aroma Oil Massage - ฿800</h3>
                                <div className='plus'>
                                    <button><div className='H-line'></div></button>
                                    <button><div className='V-line'></div></button>
                                </div>
                            </div>
                            <div className='m-details'>
                                <p className='details-p'>Savor the relaxing Aroma Oil Massage, where fragrant oils  harmonize to release tension and rejuvenate your senses.</p>
                                <h4>60 Minutes</h4>
                            </div>
                            <hr className='hr'/>
                        </div>

                        <div className='massage-subsection'>
                            <div className='inline'>
                                <h3>Aroma Oil Massage - ฿1,200</h3>
                                <div className='plus'>
                                    <button><div className='H-line'></div></button>
                                    <button><div className='V-line'></div></button>
                                </div>
                            </div>
                            <div className='m-details'>
                                <p className='details-p'>Savor the relaxing Aroma Oil Massage, where fragrant oils  harmonize to release tension and rejuvenate your senses.</p>
                                <h4>90 Minutes</h4>
                            </div>
                            <hr className='hr'/>
                        </div>

                        <div className='massage-subsection'>
                            <div className='inline'>
                                <h3>Royal Thai Traditional Massage - ฿800</h3>
                                <div className='plus'>
                                    <button><div className='H-line'></div></button>
                                    <button><div className='V-line'></div></button>
                                </div>
                            </div>
                            <div className='m-details'>
                                <p className='details-p'>Immerse in the ancient art of Thai massage. This therapeutic full-body treatment combines gentle stretching and rhythmic pressure to enhance flexibility, relieve muscle tension, and promote deep relaxation.</p>
                                <h4>60 Minutes</h4>
                            </div>
                            <hr className='hr'/>
                        </div>


                        <div className='massage-subsection'>
                            <div className='inline'>
                                <h3>Royal Thai Traditional Massage - ฿1,200</h3>
                                <div className='plus'>
                                    <button><div className='H-line'></div></button>
                                    <button><div className='V-line'></div></button>
                                </div>
                            </div>
                            <div className='m-details'>
                                <p className='details-p'>Immerse in the ancient art of Thai massage. This therapeutic full-body treatment combines gentle stretching and rhythmic pressure to enhance flexibility, relieve muscle tension, and promote deep relaxation.</p>
                                <h4>90 Minutes</h4>
                            </div>
                            <hr className='hr'/>
                        </div>

                        <div className='massage-subsection'>
                            <div className='inline'>
                                <h3>Swedish Massage - ฿1,200</h3>
                                <div className='plus'>
                                    <button><div className='H-line'></div></button>
                                    <button><div className='V-line'></div></button>
                                </div>
                            </div>
                            <div className='m-details'>
                                <p className='details-p'>Enjoy a deep tissue Massage with aroma oils. Flowing strokes and targeted kneading ease muscle tension, promoting ultimate relaxation and well-being.</p>
                                <h4>60 Minutes</h4>
                            </div>
                            <hr className='hr'/>
                        </div>

                        <div className='massage-subsection'>
                            <div className='inline'>
                                <h3>Swedish Massage - ฿1,600 </h3>
                                <div className='plus'>
                                    <button><div className='H-line'></div></button>
                                    <button><div className='V-line'></div></button>
                                </div>
                            </div>
                            <div className='m-details'>
                                <p className='details-p'>Enjoy a deep tissue Massage with aroma oils. Flowing strokes and targeted kneading ease muscle tension, promoting ultimate relaxation and well-being.</p>
                                <h4>90 Minutes</h4>
                            </div>
                            <hr className='hr'/>
                        </div>

                        <div className='massage-subsection'>
                            <div className='inline'>
                                <h3>Sports Massage - ฿1,200</h3>
                                <div className='plus'>
                                    <button><div className='H-line'></div></button>
                                    <button><div className='V-line'></div></button>
                                </div>
                            </div>
                            <div className='m-details'>
                                <p className='details-p'>Enjoy a strong deep tissue massage using aroma oils to alleviate muscle pains, cramps, and soreness.</p>
                                <h4>60 Minutes</h4>
                            </div>
                            <hr className='hr'/>
                        </div>

                        <div className='massage-subsection'>
                            <div className='inline'>
                                <h3>Sports Massage - ฿1,600 </h3>
                                <div className='plus'>
                                    <button><div className='H-line'></div></button>
                                    <button><div className='V-line'></div></button>
                                </div>
                            </div>
                            <div className='m-details'>
                                <p className='details-p'>Enjoy a strong deep tissue massage using aroma oils to alleviate muscle pains, cramps, and soreness.</p>
                                <h4>90 Minutes</h4>
                            </div>
                            <hr className='hr'/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='reservation-section'>
                <div className='reservation'>
                    <div className='res'>
                        <Link to='https://web.whatsapp.com/'>
                            <button className='reservationLink'>Make a reservation</button>
                        </Link>

                        <a href="tel:+66819810932">
                            <button className='reservationLink'>Call and book</button>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

// window.onload = function(event){
//     Massage();
//   };