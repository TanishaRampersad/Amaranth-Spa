import './Footer.css';
import React from 'react'
import { Link } from 'react-router-dom';
import copyright from '../images/copyright (1).png';
import star from '../images/star.png';

export default function Footer() {
    return(
        <footer>
            <div className='contact'>

            <div className='menu-footer'>
                <p>Menu</p>
                <ul>
                <li><Link className='links'>Home</Link></li>
                <li><Link className='links'>Specials</Link></li>
                <li><Link className='links'>Massage</Link></li>
                <li><Link className='links'>Contact</Link></li>
                </ul>
            </div>


            <div className='hours-footer'>
                <p>Hours</p>
                <ul>
                <li>Mon–Fri: 10:00am –21:00pm</li>
                <br/>
                <li>Sat - Sun: 08:00am-21:00pm</li>

                <Link className='callandbook'>Call and Book Anytime</Link>
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

                <p><Link className='link'><strong>5.0/</strong>555 reviews</Link></p>
            </div>


            <div className="socials">
                <ul>
                <li><Link className="social-link">Instagram</Link></li>
                <li><Link className="social-link">Tripadvisor</Link></li>
                </ul>
            </div>


            <div className="copyright">
                <p><img src={copyright} alt="copyright"/>2024 Amaranth</p>
            </div>

            </div>
      </footer>
    )
}