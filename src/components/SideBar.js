import React from 'react'
import './SideBar.scss';
import arrow from '../images/right-arrow.png';
import { Link } from 'react-router-dom';
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
                                Search
                            </div>
                        </li>
                        <li>
                            <div>
                                <Link to="/">
                                    <div className='li-col'>
                                        Home
                                    </div>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div>
                                <Link to="about">
                                    <div className='li-col'>
                                        About
                                    </div>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div>
                                <Link to="Contact">
                                    <div className='li-col'>
                                        Contact
                                    </div>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
