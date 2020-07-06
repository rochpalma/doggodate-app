import React, { Component } from 'react';
import HomeNav from '../HomeNav/HomeNav';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import './LandingPage.css';

class LandingPage extends Component {
    render() { 
        return (  
            <div className='main-display landing-bg'>
                <HomeNav />
                <Home />
                {/* <Footer /> */}
            </div>
        );
    }
}
 
export default LandingPage;