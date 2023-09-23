import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='homePage'>
      <h2 className='homeHead'>Home Page</h2>
      <p>Welcome to the Home Page.</p>
      <div className='homeLink'>
      <Link to="/about" className='homeAbout'>About Page</Link>
   
      <Link to="/head-tail" className='homeHT'>Head & Tail Page</Link>
      </div>
    </div>
  );
};

export default Home;
