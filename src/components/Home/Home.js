import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() { 
        return (  
            <main>
                <p>Want to discover dogs nearby for a play date?</p>
                <Link to='/signup'>Sign up</Link>
            </main>
        );
    }
}
 
export default Home;