import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/DoggoDate_02.png';
import './HomeNav.css';

class HomeNav extends Component {
    render() { 
        return (  
            <nav>
                <Link to='/'><img src={logo} alt='dog tinder logo' className='logo'/></Link>
                <Link to='/signin'className='nav-link btn'>Sign in</Link>
            </nav>
        );
    }
}
 
export default HomeNav;