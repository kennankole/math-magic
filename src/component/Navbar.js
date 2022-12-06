import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import MyCalculator from './Calculator';
import Quote from './Quote';
import '../App.css';

function NavigationMenu() {
  return (
    <section>
      <div>
        <nav className="nav-bar">
          <ul className="nav-bar-container">
            <h1 className="nav-title">Math Magician</h1>
            <Link to="/" className="nav-ul">Home</Link>
            |
            <Link to="/calculator" className="nav-ul">Calculator</Link>
            |
            <Link to="/quote" className="nav-ul">Quote</Link>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<MyCalculator />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </section>
  );
}

export default NavigationMenu;
