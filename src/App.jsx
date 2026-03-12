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
import God from './God';

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


            <nav class="navbar bg-body-tertiary fixed-top" id="hio">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">KARIMER CODER'S HUB</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">KARIMER CODER'S HUB</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href=""><Link className='llink' to="/">HOME </Link> </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#"><Link className='llink' to="/about">ABOUT</Link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#"><Link className='llink' to="/chooping">CHOPPING</Link></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#"><Link className='llink' to="/po">Project</Link></a>
                            </li>

                            <button onClick={handleMode} >{mode ? 'Dark Mode' : 'Light Mode'}</button>

                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <h1 class="dropdown-divider"></h1>
                                    </li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form class="d-flex mt-3" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>

            


            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/chooping' element={<Chop2 />} />
              <Route path='po' element={<God/>}/>
              {/* <Route path='/proje' element={<Project/>} /> */}
            </Routes>
          </Router>


          
          
        </div>
      </div>



    </div>
  )
}

export default App