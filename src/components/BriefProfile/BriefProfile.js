import React, { Component } from 'react';
import Context from '../../Context';
import dog3 from '../../images/dog-3.jpg';
import dog2 from '../../images/dog-2.jpg';
import './BriefProfile.css';
import { Link } from 'react-router-dom';

class BriefProfile extends Component {
    static contextType = Context;

    render() {
        return (  
            <div>
                <li className='box'>
                    <img src={dog3} alt='dog dp' className='dp-list'/>
                    <h2><Link to={`/dogs/${this.props.id}`}>{this.props.name}</Link></h2>        
                    <p>{this.props.about_me} </p>
                </li>
                {/* <li className='box'>
                    <img src={dog2} alt='dog dp' className='dp-list'/>
                    <h2><Link to='/dog-1'>Potchi</Link></h2>            
                    <p>Hello! I am Potchi, 5 yo. I like car rides.</p>
                </li> */}
            </div>
        );
    }
}
 
export default BriefProfile;