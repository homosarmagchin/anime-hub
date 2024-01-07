import React from 'react'
import './Header.scss';
import logo from '../images/logo.jpg';
export default function Header() {

    return (
        <div>
            <div id='logo'>
                <img alt='logo' src={logo} />
            </div>
        </div>
    )
}
