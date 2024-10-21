import './App.css';
import { Routes, Route } from 'react-router-dom';
import ErrorPage from './components/Errorpage';
import Home from './components/Home';
import Specials from './components/Specials'
import Packages from './components/Packages';
import Massages from './components/Massage';
import Contact from './components/Contact';
import Layout from './components/Layout'; 

function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />  {/* Default route */}
      <Route path="specials" element={<Specials />} />
      <Route path="packages" element={<Packages />} />
      <Route path="massages" element={<Massages />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<ErrorPage />} />  {/* Catch-all for unknown routes */}
    </Route>
  </Routes>
  );
}

export default App;
