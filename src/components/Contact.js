import React from 'react'
import Header from './Header';
import Footer from './Footer';
import './Contact.scss';
import SideBar from './SideBar';
export default function Contact() {
  return (
    <div>
      <div id='asd'>
        <div id='head-section'>
          <Header />
        </div>
        <div id='contact'>
          <SideBar />
        </div>
        <div id='content'>
          <h2>Purpose</h2>
          <section>
            <h4>
              I wanted to create my own portfolio by cloning web sites that i'm interested in. 
              And here's one of the sample. It may looks obvious that's still needs to be improved. 
              I'm working on it. So, please suggest some of the things should be improved.
              It will be inspiration to me. Thank you all.
            </h4>
          </section>
        </div>
        <div id='foo'>
          <Footer />
        </div>
      </div>
    </div>
  )
}
