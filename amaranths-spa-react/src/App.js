import './App.css';
import hamburger from './images/hamburger.png';
import { Link, Routes, Route } from 'react-router-dom';
import ErrorPage from './components/Errorpage';
import star from './images/star.png';
import copyright from './images/copyright (1).png';
import flower from './images/Mediamodifier-Design.svg';
//import candles from './images/candles 2.png';
//import candles from './images/candles 2.png';
//import Home from './components/home';
// import specials from './components/specials'
// import Packages from './components/packages';
// import Massages from './components/massages';
// import Contact from './components/contact';

function App() {
  return (
    <div className="App">

      <nav>
        <ul>
          <img className="menu" src={hamburger} alt="hamburger menu"></img>
          <p>|</p>
          <li>
            <Link className='link'href="/">Home</Link>
          </li>
          <li>
            <Link className='link' href="/specials">Specials</Link>
          </li>
          <li>
            <Link className='link' href="/packages">Packages</Link>
          </li>

          <li>
            <Link className='link' href="/massages">Massages</Link>
          </li>

          <li>
            <Link className='link' href="/contact">Contact</Link>
          </li>
          <li>
            <h4>Amaranth</h4>
          </li>
        </ul>

        <div className='booking'>
          <button className='shrink-button'>Book your stay</button>
        </div>

      </nav>



      <div className='main'>

      </div>


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


          <div class="socials">
            <ul>
              <li><Link class="social-link">Instagram</Link></li>
              <li><Link class="social-link">Tripadvisor</Link></li>
            </ul>
          </div>


          <div class="copyright">
            <p><img src={copyright} alt="copyright"/>2024 Amaranth</p>
          </div>

        </div>
      </footer>

      <div className='footer-image'>
        <div className='booking-treatment'>
          <button><img src={flower} alt="flower"/>Book your treatment<img src={flower} alt="flower"/></button>
        </div>
        {/* <img className="candles" alt="candles" src={candles}/> */}
       
      </div>


      <Routes>
          <Route path='/' /*element={<Home/>}*/ errorElement={<ErrorPage />} /> {/*for each route add the errorElement if the url doesnt work */}
          <Route path='#' /*element={<Specials />}*/ errorElement={<ErrorPage />} />
          <Route path='#' /*element={<Packages />}*/ errorElement={<ErrorPage />} />
          <Route path='#' /*element={<Massages />}*/ errorElement={<ErrorPage />} />
          <Route path='#' /*element={<Contact />}*/ errorElement={<ErrorPage />} />
          <Route path='*' element={<ErrorPage />} /> {/* The '*' path will match any route that hasn’t been explicitly defined, helping you catch 404 errors more gracefully. */}
      </Routes>

    </div>
  );
}

export default App;
