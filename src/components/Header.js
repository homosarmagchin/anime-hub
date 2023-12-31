import React from 'react'
import './Header.scss';
import Home from './Home';
import Contact from './Contact';
import NotFound from './NotFound';
import About from './About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Header() {
    
    return (
        <div>
            <div id='NavBar'>
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
    )
}
