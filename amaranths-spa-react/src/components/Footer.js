import './Footer.css';
import React from 'react'
import { Link } from 'react-router-dom';
import copyright from '../images/copyright (1).png';
import star from '../images/star.png';
import { useEffect } from 'react';
import gsap from 'gsap';

export default function Footer() {
    useEffect( () => {
        let navLink = document.querySelectorAll('#navigationLink');

        navLink.forEach (link => {
        link.addEventListener('click', () => {
            gsap.to(window, { duration: 1, scrollTo: { y: 0, autoKill: true } });
        })
        })
    })
    return(
        <footer>
        <div className='contact'>

            <div className='menu-footer'>
                <p>Menu</p>
                <ul>
                <li><Link id="nLink" smooth to="/" className='links-footer'>Home</Link></li>
                <li><Link id="nLink" smooth to="/specials" className='links-footer'>Specials</Link></li>
                <li><Link id="nLink" smooth to="/massages" className='links-footer'>Massage</Link></li>
                <li><Link id="nLink" smooth to="/contact" className='links-footer'>Contact</Link></li>
                </ul>
            </div>


            <div className='hours-footer'>
                <p>Hours</p>
                <ul>
                    <li className='hoursList'>Mon–Fri: 10:00am –21:00pm</li>
                <br/>
                    <li className='hoursList'>Sat - Sun: 08:00am-21:00pm</li>

                <a className='callandbook' href="tel:+66819810932">Call and Book Anytime</a>
                </ul>
            </div>


            <div className='contact-footer'>
                <p className='spa'>Contact</p>

                <p>Amaranth Spa and Massage</p>
                <br/>

                <p>19, 23 Soi Sukhumvit 19,</p>
                <p>Khlong Toei Nuea, Watthana,</p>
                <p>Bangkok 10110</p>
                <br/>

                <p>+66819810932</p>
                <br/>
                <p>Line ID & Kakao ID: josylee</p>
                <p>Mail: josie835@gmail.com</p>
            </div>


        </div>



            <div className='second-footer'>
            
            <div className='reviews'>
                <div className='review-stars'>
                    <img src={star} alt="stars"></img>
                    <img src={star} alt="stars"></img>
                    <img src={star} alt="stars"></img>
                    <img src={star} alt="stars"></img>
                    <img src={star} alt="stars"></img>
                </div>

                <p><Link to='https://www.tripadvisor.com/Attraction_Review-g293916-d24795837-Reviews-Amaranth_Spa_Massage-Bangkok.html' className='link'><strong>5.0/</strong>555 reviews</Link></p>
            </div>


            <div className="socials">
                <ul>
                <li><Link to='https://www.instagram.com/explore/locations/202070843164623/amaranth-spa-massage/' className="social-link">Instagram</Link></li>
                <li><Link to='https://www.tripadvisor.com/Attraction_Review-g293916-d24795837-Reviews-Amaranth_Spa_Massage-Bangkok.html' className="social-link">Tripadvisor</Link></li>
                </ul>
            </div>


            <div className="copyright">
                <p><img src={copyright} alt="copyright"/>2024 Amaranth</p>
            </div>

            </div>
      </footer>
    )
}