import React, { Component } from 'react';
import HomeNav from '../HomeNav/HomeNav';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';

class LandingPage extends Component {
    render() { 
        return (  
            <>
                <HomeNav />
                <Home />
                <Footer />
            </>
        );
    }
}
 
export default LandingPage;