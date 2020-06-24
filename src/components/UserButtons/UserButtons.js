import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserButtons extends Component {
    render() { 
        return (  
            <div>
                <button>Add Dog</button>
                <Link to='/setup'>Edit Profile</Link>
            </div>
        );
    }
}
 
export default UserButtons;