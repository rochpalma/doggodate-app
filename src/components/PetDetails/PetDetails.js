import React, { Component } from 'react';
import './PetDetails.css';

class PetDetails extends Component {
    render() { 
        return (  
            <div>
                <section className='pet-details'>
                    <h2>Botchog</h2>
                    <p>Poodle</p>
                    <p> Medium | 6 | Male</p>
                    <p>90292</p>          
                    <h3>About Me</h3>
                    <p>Los Angeles, CA</p>
                    <p>Hello! I am Botchog, 6 yo. I like to play a lot! But only girls can pet me.</p>
                </section>
            </div>
        );
    }
}
 
export default PetDetails;