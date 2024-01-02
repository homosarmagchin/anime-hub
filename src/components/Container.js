import React from 'react'
import CharacterField from './CharacterField';
import './Container.scss';
import logo from '../images/logo.jpg';
import Footer from './Footer.js'
import SideBar from './SideBar';
export default function Container() {
  return (
    <div>
      <div id='logo'>
        <img alt='logo' src={logo} />
      </div>
      <SideBar />
      <CharacterField />
      <div id='footer'>
        <Footer />
      </div>
    </div>
  )
}
