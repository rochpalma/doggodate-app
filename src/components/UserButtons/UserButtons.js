import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UserButtons.css'

class UserButtons extends Component {
    render() { 
        return (  
            <div className='userBtn'>
                <ul>
                    <li>
                        <Link to='/setup'>Add Dog</Link>
                    </li>
                    <li>
                        <Link to='/setup'>Edit Profile</Link>
                    </li>
                </ul>              
            </div>
        );
    }
}
 
export default UserButtons;