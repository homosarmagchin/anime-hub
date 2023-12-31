import React from 'react'
import insta from '../images/insta.png'
import './Footer.scss'
export default function Footer() {
    return (
        <div className='container'>
            <div className='main'>
                <section>
                    <div>
                        <ul>
                            <li><h3>Community channel</h3></li>
                            <li>Community</li>
                            <li>Support</li>
                            <li>Help</li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div>
                        <ul>
                            <li><h3>Overview</h3></li>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div id='follows'>
                        <ul>
                            <li>
                                <h3>Follow us</h3>
                            </li>
                            <li>
                                <img alt='insta' src={insta} />
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
}
