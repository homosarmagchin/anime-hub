import React from 'react'
import './SideBar.scss';
import arrow from '../images/right-arrow.png';
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
            </div>
        </div>
    )
}
