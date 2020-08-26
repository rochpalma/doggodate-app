import React, { Component } from 'react';
import ProfileNav from '../ProfileNav/ProfileNav';
import Footer from '../Footer/Footer';
import PetList from '../PetList/PetList'

class Feed extends Component {
    render() { 
        return (  
            <>
                <ProfileNav />
                <PetList />
                <Footer />
            </>
        );
    }
}
 
export default Feed;