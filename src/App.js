import React from 'react'
import Home from '../src/components/Home';
import Contact from '../src/components/Contact';
import NotFound from '../src/components/NotFound';
import About from '../src/components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  
  return (
    <div>
      <Router>
        <div id='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
