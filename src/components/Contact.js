import React from 'react'
import Header from './Header';
import Footer from './Footer';
import './Contact.scss';
import asd from '../images/pngegg.png';
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
          <h2>Contact:</h2>
          <div id='bar' href='https://www.facebook.com/h0mosarmagchin'>
            <a href='https://www.facebook.com/h0mosarmagchin'>
              <img alt='asd' src={asd} href='https://www.facebook.com/h0mosarmagchin'>

              </img>
              <p>Facebook</p>
            </a>
          </div>
        </div>
        <div id='foo'>
          <Footer />
        </div>
      </div>
    </div>
  )
}
