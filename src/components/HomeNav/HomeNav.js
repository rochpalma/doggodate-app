import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomeNav extends Component {
    render() { 
        return (  
            <nav>
                <Link to='/signin'>Sign in</Link>
            </nav>
        );
    }
}
 
export default HomeNav;