import React, { Component } from 'react';
import dog3 from '../../images/dog-3.jpg';
import dog2 from '../../images/dog-2.jpg';
import './BriefProfile.css';
import { Link } from 'react-router-dom';

class BriefProfile extends Component {
    render() { 
        return (  
            <div>
                <li className='box'>
                    <img src={dog3} alt='dog dp' className='dp-list'/>
                    <h2><Link to='/dog-1'>Dazai</Link></h2>        
                    <p>Hello! I am Dazai. Playful puppy </p>
                </li>
                <li className='box'>
                    <img src={dog2} alt='dog dp' className='dp-list'/>
                    <h2><Link to='/dog-1'>Potchi</Link></h2>            
                    <p>Hello! I am Potchi, 5 yo. I like car rides.</p>
                </li>
            </div>
        );
    }
}
 
export default BriefProfile;