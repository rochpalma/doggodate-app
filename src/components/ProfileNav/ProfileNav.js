import React, { Component } from 'react';
import Context from '../../Context';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import logo from '../../images/logo/DoggoDate_02.png';
import './ProfileNav.css';

class ProfileNav extends Component {
    static contextType = Context;

    handleLogOut = () => {
        TokenService.clearAuthToken();
        TokenService.clearDogId();
        TokenService.clearOwnerId();
        TokenService.clearUserId();
      };

    renderLogout = () => {
        return (
            <Link to="/" onClick={() => this.handleLogOut()}>
              Logout
            </Link>
          ); 
    }
    render() { 
        return (  
            <nav>
                <Link to='/feed'><img src={logo} alt='dog tinder logo' className='logo'/></Link>
                <div id="ham-nav">
                    <label htmlFor="hamburger">&#9776;</label>
                    <input type="checkbox" id="hamburger" />
                    <div id='ham-items'>
                        <Link to='/feed'>Home</Link>
                        <Link to='/mydogprofile'>My Dog Profile</Link>
                        <Link to='/myevents'>My Events</Link>
                        <Link to='/myprofile'>My Profile</Link>
                        {this.renderLogout()}
                    </div>
                </div>
            </nav>
        );
    }
}
 
export default ProfileNav;