import React from 'react'
import CharacterField from './CharacterField';
import './Container.scss';
import Header from './Header.js';
import logo from '../images/logo.jpg';
import Footer from './Footer.js'
export default function Container() {
  return (
    <div>
      <div id='logo'>
        <img alt='logo' src={logo} />
      </div>
      <Header />
      <CharacterField />
      <Footer />
    </div>
  )
}
