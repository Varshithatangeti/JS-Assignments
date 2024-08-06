`//6.create a react component that uses react router for client side routing`
import React from 'react';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};
const About = () => {
    return (
      <div>
        <h1>About Page</h1>
      </div>
    );
};
const Contact = () => {
    return (
      <div>
        <h1>Contact Page</h1>
      </div>
    );
};
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
