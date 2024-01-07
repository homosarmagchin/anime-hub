import React from 'react'
import CharacterField from './CharacterField';
import './Container.scss';
import Footer from './Footer.js';
import Header from './Header';
import SideBar from './SideBar';
export default function Container() {
  return (
    <div>
      <div id='logo'>
        <Header />
      </div>
      <div id="sidebar">
        <SideBar />
      </div>
      <div id='char'>
        <CharacterField />
      </div>
      <div id='footer'>
        <Footer />
      </div>
    </div>
  )
}
