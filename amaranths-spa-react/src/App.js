import './App.css';
import hamburger from './images/hamburger.png';
import { Link, Routes, Route } from 'react-router-dom';
import ErrorPage from './components/Errorpage';
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
          <h4>
            <Link className='link' href="/">Amaranth</Link>
          </h4>
        </ul>

        <button className="booking">Book your stay</button>
      
      </nav>

      <Routes>
          <Route path='/' errorElement={<ErrorPage />} /> {/*for each route add the errorElement if the url doesnt work */}
          <Route path='#' /*element={<Home/>}*/ errorElement={<ErrorPage />} />
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
