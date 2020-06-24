import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProfileNav extends Component {
    render() { 
        return (  
            <nav>
                <ul>
                    <li>
                        <Link to='/feed'>Home</Link>
                    </li>
                    <li>
                        <Link to='/myprofile'>My Profile</Link>
                    </li>
                    <li>
                        <Link to='/logout'>Logout</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
 
export default ProfileNav;