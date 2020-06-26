import React, { Component } from 'react';
import dog1 from '../../images/dog-1.jpg';   

class DogDP extends Component {
    render() { 
        return (  
            <div>
                <img src={dog1} alt='dog1' /> 
            </div>
        );
    }
}
 
export default DogDP;