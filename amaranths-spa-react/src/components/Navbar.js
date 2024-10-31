import './Navbar.css';
import React from 'react'
//import { Link } from 'react-router-dom';
import hamburger from '../images/hamburger.png';
import { useEffect } from 'react'; 
import { HashLink as Link} from 'react-router-hash-link';
//import star from '../images/star.png';
import gsap from 'gsap';

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

    let hamburger = document.querySelector(".menu");
    let navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("active")
        navMenu.classList.toggle("active")
    });




    let navLink = document.querySelectorAll('#navigationLink');

    navLink.forEach (link => {
      link.addEventListener('click', () => {
        gsap.to(window, { duration: 1, scrollTo: { y: 0, autoKill: true } });
      })
    })

  })


    return(
      <>
        <nav>
          <div>
            <ul>
              {/* <div className='hamburger-menu'> */}
                <img className="menu" src={hamburger} alt="hamburger menu"></img>
                <p>|</p>
              {/* </div> */}
              <li className='nav-item'>
                <Link id="navigationLink" className='link'to="/">Home</Link>
                  <div className='d-padding'>
                    <div className='d'></div>
                  </div>
              </li>
              <li className='nav-item'>
                <Link id="navigationLink" className='link' to="/specials">Specials</Link>
                  <div className='d-padding'>
                    <div className='d'></div>
                  </div>
              </li>
              <li className='nav-item'>
                <Link id="navigationLink" className='link' to="/packages">Packages</Link>
                  <div className='d-padding'>
                    <div className='d'></div>
                  </div>
              </li>

              <li className='nav-item'>
                <Link id="navigationLink" className='link' to="/massages">Massages</Link>
                  <div className='d-padding'>
                    <div className='d'></div>
                  </div>
              </li>

              <li className='nav-item'>
                <Link id="navigationLink" className='link' to="/contact">Contact</Link>
                  <div className='d-padding'>
                    <div className='d'></div>
                  </div>
              </li>
              
              <h4>Amaranth</h4>
            </ul>
          </div>

        <div className='booking'>
          <Link smooth to="/#form">
            <button className='shrink-button'>Book your stay</button>
          </Link>
        </div>

      </nav>

      {/* <div className='menu-slide'>
        <h3>Menu</h3>

        <ul>
          <li>Home</li>
          <li>Specials</li>
          <li>Packages</li>
          <li>Massages</li>
          <li>Contact</li>
        </ul>

        <hr/>

        <div>
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

          <div className='whatsapp'>
            <p>Whatsapp</p>
          </div>
        </div>

      </div> */}
      </>
    )
}