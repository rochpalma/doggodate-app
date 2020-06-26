import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../DogTinder.png';
import './HomeNav.css';

class HomeNav extends Component {
    render() { 
        return (  
            <nav>
                <img src={logo} alt='dog tinder logo' className='logo'/>
                <Link to='/signin'className='nav-link'>Sign in</Link>
            </nav>
        );
    }
}
 
export default HomeNav;