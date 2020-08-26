import React, { Component } from 'react';
import HomeNav from '../HomeNav/HomeNav';
import Home from '../Home/Home';
import './LandingPage.css';

class LandingPage extends Component {
    render() { 
        return (  
            <div className='main-display landing-bg'>
                <HomeNav />
                <Home />
            </div>
        );
    }
}
 
export default LandingPage;