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
        // this.context.setUser({});
        TokenService.clearDogId();
        TokenService.clearOwnerId();
        TokenService.clearUserId();
        //this.context.clearDogProfile();
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
                <ul>
                    <li>
                        <Link to='/feed' className='nav-links'>Home</Link>
                    </li>
                    <li>
                        <Link to='/mydogprofile' className='nav-links'>My Dog Profile</Link>
                    </li>
                    <li>
                        <Link to='/myevents' className='nav-links'>My Events</Link>
                    </li>
                    <li>
                        <Link to='/myprofile' className='nav-links'>My Profile</Link>
                    </li>
                    {this.renderLogout()}
                </ul>
            </nav>
        );
    }
}
 
export default ProfileNav;