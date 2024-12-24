import React from 'react'
import Home from './Home'
import About from './About'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Chop2 from './Chop2';

const App = () => {
  return (
    <div>

      {/* <Home/>
      <About/> */}

      <Router>


        <nav>
          <ul>
            <li><Link className='llink' to="/">HOME </Link> </li>
            <li><Link className='llink' to="/about">ABOUT</Link></li>
            <li><Link className='llink' to="/chooping">CHOPPING WEDSITE</Link></li>
            <li>PROJECT</li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/chooping' element={<Chop2/>}/>
          <Route/>
        </Routes>
      </Router>



      <div>
      </div>
    </div>
  )
}

export default App