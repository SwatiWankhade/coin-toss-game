import React from 'react';
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import HeadTail from './pages/HeadTail';
import './App.css';

function App() {
  return (
   
    <div>      
      <BrowserRouter>
      <nav className='navbar'>
      <h3 className='logoName'>Toss Coin Game</h3>
        <ul className='ulList'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/head-tail">Head & Tail</Link>
          </li>
        </ul>
      </nav>

        <Routes>
          <Route exact path="/" element={<Home/>} />
            
          <Route path="/about" element={<About/>} />
           
          <Route path="/head-tail" element={<HeadTail/>} />
           
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
