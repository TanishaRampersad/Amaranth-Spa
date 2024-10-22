import React, { useEffect } from 'react';
import '../components/Packages.css';
import AmaranthLogo from '../images/amaranth 2.png';
import black from '../images/black.jpg';
//import packageBanner from '../images/banner-2.jpg';
import lotus from '../images/lotus (1).png';
import gsap from 'gsap';
import MouseFollower from "mouse-follower"; // Import the Mouse Follower library
import 'mouse-follower/dist/mouse-follower.min.css'; // Import its CSc
import { ScrollTrigger } from "gsap/ScrollTrigger";
import reception from '../images/Amaranth-reception.jpg';


export default function Packages() {
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
 
 
    new MouseFollower({
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
                    <img className="packV" src={reception} alt="banner"/>
                </div>
            </div>

            <div className='image'>
                <img className="therapist" src={black} alt="Massage therapist"/>
            </div>


            <div className='couples-massage-package'>
                <img className="flower" src={lotus} alt="logo"/>
                <h2>Couples Massage Package</h2>
                <br/>

                <h3 className='duration'>Duration: 2 hours</h3>
                <br/>



                <div className='welcome'>
                    <h3>Welcome Ritual:</h3>
                    <p className='ritualP'>Each couple will receive a  complimentary herbal tea or sparkling water served upon arrival.</p>
                    <p>A short consultation to discuss preferences, any areas of tension, and massage techniques.</p>
                    <br/>
                </div> 

                <div className='side-by-side'>
                    <h3>Side-by-Side Massage:</h3>
                    <p>A 60-minute side-by-side massage tailored to each individual's preferences. Options could include:</p>
                    <ul>
                        <li>Korean Full Body Care</li>
                        <li>Royal Thai Traditional Massage</li>
                        <li>Swedish Massage</li>
                    </ul>
                    <br/>
                </div> 

                <div className='footRitual'>
                    <h3>Foot Ritual:</h3>
                    <p>A 15 minute foot scrub with our Korean scrub</p>
                    <p>A brief foot massage to relieve tension in the feet</p>
                    <br/>
                </div> 

                <div className='relaxationTime'>
                    <h3>Private Relaxation Time:</h3>
                    <p>15 minutes of quiet time in a serene room with soft music and dim lighting before or after the massage.</p>
                    <br/>
                </div> 

                <div className='addOns'>
                    <h3>Optional Add-Ons:</h3>
                    <p>Upgrade to a 90-minute massage for a small fee</p>
                    <p>Add a 30-minute facial or body scrub for enhanced pampering</p>
                    <p>A bottle of champagne or wine for a celebratory touch</p>
                    <br/>
                </div> 

                <div className='gifts'>
                    <h3>Take-Home Gifts:</h3>
                    <p>A small gift such as a natural Korean skincare product (e.g., sheet mask or essence) for continued self-care at home.</p>
                    <br/>
                </div> 

                <p className='cost'>Cost: 3 400 Baht</p>
            </div>


            <hr className='hr'/>


            <div className='korean-massage-package'>
                <div className='korean-package'>
                    <img className="k-flower" src={lotus} alt="logo"/>
                    <h2>Signature Korean Massage Package</h2>
                    <br/>
                </div>

                <h3 className='duration'>Duration: 2 hours</h3>
                <br/>

                <div className='K-welcomeRitual'>
                    <h3>Welcome Ritual:</h3>
                    <p className='k-ritualP'>Guests are greeted with a warm cup of herbal tea (e.g., ginseng or jujube tea) to promote relaxation.</p>
                    <p>A short consultation to understand individual preferences and any areas of concern.</p>
                    <br/>
                </div>

                <div className='Korean-scrub'>
                    <h3>Korean Body Scrub (Seshin):</h3>
                    <p>A 30-minute traditional Korean body scrub using exfoliating mitts (usually known as Italy or scrub gloves).</p>
                    <p>Natural scrubs made from rice bran or sea salt to remove dead skin and promote circulation, leaving the skin soft and revitalised.</p>
                    <br/>
                </div>

                <div className='KoreanMassage'>
                    <h3>Signature Korean Massage:</h3>
                    <p>Choose one of the 60-minute massage that incorporates various techniques, such as:</p>
                    <ul>
                        <li>Korean Full Body Care: To dissolve tension and deliver unparalleled warmth, relaxation and beauty</li>
                        <li>Aroma oil massage: to release tension and rejuvenate your senses.</li>
                        <li>Sports massage:  to alleviate muscle pains, cramps, and soreness.</li>
                    </ul>
                    <br/>
                </div>

                <div className='aromatherapy'>
                    <h3>Aromatherapy Treatment:</h3>
                    <p>Choice of essential oils to enhance relaxation during the massage, such as lavender or eucalyptus.</p>
                    <p>Optional warm compresses infused with essential oils on the back or shoulders.</p>
                    <br/>
                </div>

                <div className='k-relaxation'>
                    <h3>Post-Massage Relaxation:</h3>
                    <p>15 minutes of quiet time in a serene relaxation area, allowing guests to unwind.</p>
                    <br/>
                </div>

                <div className='k-gifts'>
                    <h3>Take-Home Gifts:</h3>
                    <p>A small gift such as a natural Korean skincare product (e.g., sheet mask or essence) for continued self-care at home.</p>
                    <br/>
                </div>

                <p className='cost'>Cost: 2 200 Baht </p>
            </div>


            <hr className='hr'/>
           

            <div className='detox-massage-package'>
                <div className='detox-package'>
                    <img className="d-flower" src={lotus} alt="logo"/>
                    <h2>Detox Package</h2>
                    <br/>
                </div>

                <h3 className='duration'>Duration: 2 hours</h3>
                <br/>

                <div className='detoxRitual'>
                    <h3>Welcome Ritual:</h3>
                    <p>A complimentary herbal tea or infused water (e.g., lemon, cucumber, or mint) to hydrate and prepare the body for detoxification.</p>
                    <p>A brief consultation to discuss health goals and any specific needs.</p>
                    <br/>
                </div>

                <div className='bodyscrub'>
                    <h3>Body Scrub:</h3>
                    <p>A 30-minute full-body exfoliating scrub using natural ingredients like sea salt, sugar, or coffee grounds.</p>
                    <p>The scrub can be infused with detoxifying ingredients (e.g., activated charcoal, green tea) to help remove impurities from the skin.</p>
                    <br/>
                </div>

                <div className='detoxWrap'>
                    <h3>Detoxifying Wrap:</h3>
                    <p>A 30-minute body wrap using detoxifying agents such as seaweed, clay, or herbal mixtures.</p>
                    <p>The wrap helps to draw out toxins, improve circulation, and hydrate the skin.</p>
                    <p>During the wrap, clients can receive a relaxing scalp or foot massage.</p>
                    <br/>
                </div>

                <div className='detoxMassage'>
                    <h3>Detox Massage:</h3>
                    <p>A 60-minute massage focused on lymphatic drainage techniques to promote detoxification and improve circulation.</p>
                    <p>Use of essential oils known for their detoxifying properties, such as grapefruit, lemon, or juniper.</p>
                    <br/>
                </div>

                <div className='detoxHydration'>
                    <h3>Hydration & Nutrition:</h3>
                    <p>A light, healthy snack (e.g., fruit, nuts) to replenish energy after treatments.</p>
                    <br/>
                </div>

                <div className='detoxPost'>
                    <h3>Post-Treatment Relaxation:</h3>
                    <p>15 minutes of quiet time in a serene relaxation area, allowing guests to unwind and absorb the benefits of their treatments.</p>
                    <br/>
                </div>

                <div className='detoxGifts'>
                    <h3>Take-Home Gifts:</h3>
                    <p>A small gift such as a detox tea blend or a natural skincare product (e.g., a gentle cleanser or moisturiser) to support ongoing detoxification at home.</p>
                </div>

                <p className='cost'>Cost: 2 600 Baht </p>
            </div>


            <div className='flower-line'>
                <div className='horizontal-line1'></div>
                <img src={lotus} alt="lotus"/>
                <div className='horizontal-line2'></div>
            </div>


            <div className='booking-section'>
          <h1>Book one of our Packages</h1>

          <div className="form">
            <form>
              <label htmlFor="userName">Name</label>
              <input type="text" id="userName" name="user-name"></input>
              <label htmlFor="userEmail">Email</label>
              <input type="text" id="userEmail" name="user-email"></input>
              <label htmlFor="selection">Select Treatment or Package</label>
              <select htmlFor="selection">
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
    )
}
