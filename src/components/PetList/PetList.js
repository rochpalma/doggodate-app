


import React, { Component } from 'react';
import BriefProfile from '../BriefProfile/BriefProfile';

class Feed extends Component {
    render() { 
        return (  
            <div>
                <BriefProfile />
                <BriefProfile />
            </div>
        );
    }
}
 
export default Feed;