import React from 'react'
import Home from './Home';
import Contact from './Contact';
import NotFound from './NotFound';
import About from './About';
import './SideBar.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import arrow from '../images/right-arrow.png';
export default function SideBar() {
    return (
        <div>
            <div className='dropdown'>
                <div id="arrow">
                    <img alt='arrow' src={arrow} />
                </div>
                <div className='dropdown-content'>
                    <ul>
                        <li>
                            <div>
                                Home
                            </div>
                        </li>
                        <li>
                            <div>
                                About
                            </div>
                        </li>
                        <li>
                            <div>
                                Contact
                            </div>
                        </li>
                        <li>
                            <div>
                                Search
                            </div>
                        </li>
                    </ul>
                </div>
                <Router>
                    <div id='content'>
                        <Routes>
                            <Route path='home' element={<Home />} />
                            <Route path='about' element={<About />} />
                            <Route path='contact' element={<Contact />} />
                            <Route path='*' element={<NotFound />} />
                        </Routes>
                    </div>
                </Router>
            </div>
        </div>
    )
}
