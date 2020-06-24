import React, { Component } from 'react';
import HomeNav from '../HomeNav/HomeNav';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';

class LandingPage extends Component {
    render() { 
        return (  
            <div>
                <HomeNav />
                <Home />
                <Footer />
            </div>
        );
    }
}
 
export default LandingPage;