import React, { Component } from 'react';
import Context from '../../Context';
import './PetDetails.css';
import icon_location from '../../images/icons-desc/Icon_Location.png';
import icon_gender from '../../images/icons-desc/Gender.png';
import icon_age from '../../images/icons-desc/Icon_Age.png';
import icon_breed from '../../images/icons-desc/Icon_Breed.png';
import icon_size from '../../images/icons-desc/Icon_Size.png';

class PetDetails extends Component {
    static contextType = Context;
    render(){
        return(
            <>
                <h2>{this.props.dog.full_name}</h2>
                <div className='dog-info'>
                    <span>
                        <img src={icon_location} className='icons' />
                        {this.props.dog.city}, {this.props.dog.loc_state}
                    </span>
                    <span>
                        <img src={icon_size} className='icons' />
                        {this.props.dog.size}
                    </span>
                    <span>
                        <img src={icon_age} className='icons' />
                        {this.props.dog.age} 
                    </span>
                    <span>
                        <img src={icon_gender} className='icons' />
                        {this.props.dog.gender}
                    </span>
                    <span>
                        <img src={icon_breed} className='icons' />
                        {this.props.dog.breed}
                    </span>
                    
                    <p className='pet-desc'>{this.props.dog.about_me}</p>
                </div>
            </>
        )
    }
}
 
export default PetDetails;