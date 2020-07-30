import React, { Component } from 'react';
import Context from '../../Context';
import BriefProfile from '../BriefProfile/BriefProfile';
import './PetList.css';
import DoggodateApiService from '../../services/doggodate-api-service';

class Feed extends Component {
    static contextType = Context;

    state = {
        dogs: this.context.dogs,
    }

    componentDidMount() {
        DoggodateApiService.getDogs()
            .then(res => {
                this.context.setDogs(res);
            })
            .catch(this.context.setError);
    }
    render() {
        const dogs = this.context.dogs.map((dog, index) => {
            return <ul>
                        <BriefProfile 
                            key={index}
                            id={dog.id} 
                            name={dog.full_name} 
                            about_me={dog.about_me}
                        />
                    </ul>
        }); 
        return (  
            <div className='pet-container'>
                <h1>Dogs near me</h1>
                {dogs}
                {/* <ul>
                    <BriefProfile />
                    <BriefProfile />
                    <BriefProfile />
                </ul> */}
            </div>
        );
    }
}
 
export default Feed;