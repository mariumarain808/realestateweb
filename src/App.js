import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.js';
import './App.css';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import Listing from './pages/Listing.js';
import Contact from './pages/Contact.js'

function App() {
  return (
    <Router>
      <Navbar title={"RealEstate"} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Listing" element={<Listing />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
