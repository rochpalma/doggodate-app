import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
    render() { 
        return (  
            <main>
                <div className='landing-container border'>
                    <p>Want to discover dogs nearby for a play date?</p>
                    <Link to='/signup' className='btn'>Sign up</Link>
                </div>
            </main>
        );
    }
}
 
export default Home;