import React, { Component } from 'react';
import DogDP from '../DogDP/DogDP';
import UserButtons from '../UserButtons/UserButtons';
import PetDetails from '../PetDetails/PetDetails';
import CommentSection from '../CommentSection/CommentSection';

class Profile extends Component {
    render() { 
        return (  
            <div>
                <DogDP />
                <UserButtons />
                <PetDetails />
                <CommentSection />
            </div>
        );
    }
}
 
export default Profile;