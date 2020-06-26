import React, { Component } from 'react';
import ProfileNav from '../ProfileNav/ProfileNav';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';

class ProfilePage extends Component {
    render() { 
        return (  
            <div>
                <ProfileNav />
                <Profile />
                <Footer />
            </div>
        );
    }
}
 
export default ProfilePage;