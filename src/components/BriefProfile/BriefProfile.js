import React, { Component } from 'react';
import Context from '../../Context';
import './BriefProfile.css';
import { Link } from 'react-router-dom';

class BriefProfile extends Component {
    static contextType = Context;

    render() {
        return (  
            <>
                <li className='box'>
                    <Link to={`/dogs/${this.props.id}`}>
                        <img src={this.props.picture} alt='dog dp' className='dp-list pet-img'/>
                    </Link>
                    <div className='card-container'>
                        <h2><Link to={`/dogs/${this.props.id}`}>{this.props.name}</Link></h2>        
                        <p>{this.props.about_me} </p>
                    </div>
                </li>
            </>
        );
    }
}
 
export default BriefProfile;