


import React, { Component } from 'react';
import BriefProfile from '../BriefProfile/BriefProfile';
import './PetList.css'

class Feed extends Component {
    render() { 
        return (  
            <div className='pet-container'>
                <h1>Dogs near me</h1>
                <ul>
                    <BriefProfile />
                    <BriefProfile />
                    <BriefProfile />
                </ul>
            </div>
        );
    }
}
 
export default Feed;