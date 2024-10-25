import './Navbar.css';
import React from 'react'
import { Link } from 'react-router-dom';
import hamburger from '../images/hamburger.png';
import { useEffect } from 'react'; 
//import gsap from 'gsap';

export default function Navbar() {

  useEffect(() => {
    
    // const textAnimation = document.querySelectorAll('nav ul li');

    // const itemsWithoutLast = Array.from(textAnimation).slice(0, -1); //0 means start at first index and remove last item

    // gsap.defaults({duration: 0.3});

    // itemsWithoutLast.forEach(function(item, index) {
    //   const tl = gsap.timeline({paused: true})
    //     .to(textAnimation[index], {
    //       y: "-100%",
    //       opacity: 0,
    //       duration: 0.1,
    //       ease: 'none',
    //     })
    //     .to(textAnimation[index], {
    //       y: "100%",
    //       opacity: 1,
    //       duration: 0.1,
    //       ease: 'none',
    //     })
    //     .to(textAnimation[index],{
    //       y: 0,
    //       opacity: 1,
    //       duration: 0.1,
    //       ease: 'none',
    //     })

    //     item.addEventListener("mouseenter", () => tl.play());
    //     item.addEventListener("mouseleave", () => tl.pause().progress(0));
    // })
    
    // let D = document.querySelectorAll('.d');
    // let navText = document.querySelectorAll('.link');
    
    //   navText.forEach((navText, index) => {
    //     navText.addEventListener('mousenter', () => {

    //       D[index].style.display = "block";
    //     })

    //     navText.addEventListener('mouseleave', () => {
    //       // Hide the corresponding .d element when not hovered
    //       D[index].style.display = "none";
    //     });
    //   })

  })


    return(
        <nav>
          <div>
            <ul>
              <img className="menu" src={hamburger} alt="hamburger menu"></img>
              <p>|</p>
              <li>
                <Link className='link'to="/">Home</Link>
                  <div className='d-padding'>
                    <div className='d'></div>
                  </div>
              </li>
              <li>
                <Link className='link' to="/specials">Specials</Link>
                  <div className='d-padding'>
                    <div className='d'></div>
                  </div>
              </li>
              <li>
                <Link className='link' to="/packages">Packages</Link>
                  <div className='d-padding'>
                    <div className='d'></div>
                  </div>
              </li>

              <li>
                <Link className='link' to="/massages">Massages</Link>
                  <div className='d-padding'>
                    <div className='d'></div>
                  </div>
              </li>

              <li>
                <Link className='link' to="/contact">Contact</Link>
                  <div className='d-padding'>
                    <div className='d'></div>
                  </div>
              </li>
              
              <h4>Amaranth</h4>
            </ul>
          </div>

        <div className='booking'>
          <button className='shrink-button'>Book your stay</button>
        </div>

      </nav>
    )
}