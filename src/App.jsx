import React, { useState } from 'react'
import Home from './Home'
import About from './About'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Chop2 from './Chop2';
import face from './assets/facebook.png'
import instal from './assets/instalite.png'
import inst from './assets/insta.png'
import git from './assets/github.png'
import twi from './assets/Twitter.png'
import Pro from './Pro';

const App = () => {
  const [mode, setMode] = useState(true)
  
      function handleMode() {
          setMode(!mode)
      }
  return (
    <div className='iiop'>
      {/* <Home/>
      <About/> */}

      <div className='ingeneral'>
        <div className={mode ? 'light' : 'dark'}>
          <Router>


            <nav >
              <ul>
                <li><Link className='llink' to="/">HOME </Link> </li>
                <li><Link className='llink' to="/about">ABOUT</Link></li>
                <li><Link className='llink' to="/chooping">CHOPPING WEDSITE</Link></li>
                <li><Link className='llink' to="/poject">PROJECT</Link></li>
              </ul>
            </nav>

            <button onClick={handleMode} >{mode ? 'Dark Mode' : 'Light Mode'}</button>


            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/chooping' element={<Chop2 />} />
              <Route path='/project' element={<Pro />} />
            </Routes>
          </Router>


          <br /><br /><br /><br />

          <div className='iconss'>
            <ul>
              <li><img src={face} alt="" /></li>
              <li><img src={instal} alt="" /></li>
              <li><img src={git} alt="" /></li>
              <li><img src={inst} alt="" /></li>
              <li><img src={twi} alt="" /></li>
            </ul>
          </div>

          <br /><br /><br /><br /><br /><br />
          
        </div>
      </div>



    </div>
  )
}

export default App