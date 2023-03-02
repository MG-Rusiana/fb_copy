import React, { useState } from 'react'
import './header.css'
import FB from '../../img/fb.png'
import home from '../../img/1.png'
import watch from '../../img/2.png'
import market from '../../img/3.png'
import people from '../../img/4.png'
import games from '../../img/5.png'
import menu from '../../img/a.png'
import messenger from '../../img/b.png'
import notifications from '../../img/c.png'
import account from '../../img/d.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


export const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const handleDropdownClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
        console.log("clicked")
      };
    const DropdownMenu = () => {
    return (
        <div className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
        <ul>
            <li>Setting & Privacy</li>
            <li>Help & Support</li>
            <li>Display & Acessibility</li>
            <li>Give Feedback</li>
            <li>Log Out</li>
        </ul>
        </div>
    );
    };
  return (
    <div className='header'>
        <div className='logo-search'>
            <img src={FB} alt='' />
            <div>
                <FontAwesomeIcon className='icon' icon={ faMagnifyingGlass } />
                <input placeholder='Search Facebook'/>
            </div>
        </div>
        <div className='tabs'>
            <img src={home} alt='' />
            <img src={watch} alt='' />
            <img src={market} alt='' />
            <img src={people} alt='' />
            <img src={games} alt='' />
        </div>
        <div className='profile'>
            <img src={menu} alt='' />
            <img src={messenger} alt='' />
            <img src={notifications} alt='' />   
            <div className="main-component">
            <img src={account} alt='Profile' onClick={handleDropdownClick}/>
            {isDropdownOpen && <DropdownMenu />}
            </div>
        </div>
    </div>
  )
}
