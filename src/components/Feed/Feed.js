import React, { Component } from 'react';
import ProfileNav from '../ProfileNav/ProfileNav';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import PetList from '../PetList/PetList'

class Feed extends Component {
    render() { 
        return (  
            <div>
                <ProfileNav />
                <PetList />
                <Profile />
                <Footer />
            </div>
        );
    }
}
 
export default Feed;