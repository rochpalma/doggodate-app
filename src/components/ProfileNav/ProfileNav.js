import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../DogTinder.png';
import './ProfileNav.css';

class ProfileNav extends Component {
    render() { 
        return (  
            <nav>
                <img src={logo} alt='dog tinder logo' className='logo'/>
                <ul>
                    <li>
                        <Link to='/feed' className='nav-links'>Home</Link>
                    </li>
                    <li>
                        <Link to='/myprofile' className='nav-links'>My Profile</Link>
                    </li>
                    <li>
                        <Link to='/logout' className='nav-links'>Logout</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
 
export default ProfileNav;