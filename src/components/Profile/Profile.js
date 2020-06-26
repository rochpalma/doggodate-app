import React, { Component } from 'react';
import DogDP from '../DogDP/DogDP';
import UserButtons from '../UserButtons/UserButtons';
import PetDetails from '../PetDetails/PetDetails';
import CommentSection from '../CommentSection/CommentSection';
import  './Profile.css'

class Profile extends Component {
    render() { 
        return (  
            <div className='profile-container'>
                <DogDP />
                <UserButtons />
                <PetDetails />
                <CommentSection />
            </div>
        );
    }
}
 
export default Profile;