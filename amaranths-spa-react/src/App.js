import './App.css';
import hamburger from './images/hamburger.png';

function App() {
  return (
    <div className="App">

      <nav>
        <ul>
        <img className="menu" src={hamburger} alt="hamburger menu"></img>
          <p>|</p>
          <li>Home</li>
          <li>Specials</li>
          <li>Packages</li>
          <li>Massages</li>
          <li>Contact</li>
          <h4>Amaranth</h4>
        </ul>

        <button className="booking">Book your stay</button>
        
        
      
      </nav>

    


    </div>
  );
}

export default App;
