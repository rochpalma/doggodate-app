import React, { Component } from 'react';
import Context from '../../Context';

class DogDP extends Component {
    static contextType = Context;

    render() {  
        return(
            <div>
                <img src={this.props.picture} alt={`${this.props.dogName}'s picture`} className='dp-img'/> 
            </div
        >)
    }
}
 
export default DogDP;