import React, { Component } from 'react';
import Context from "../../Context";
import ProfileNav from '../ProfileNav/ProfileNav';
import Footer from '../Footer/Footer';
import './ProfileSetup.css';
import DoggodateApiService from '../../services/doggodate-api-service';
import TokenService from '../../services/token-service';
import axios from 'axios';
import config from '../config';

class ProfileSetup extends Component {
    static contextType = Context;

    state = {
        error: null,
        selectedFile: null,
        fileName: null
    }

    singleFileChangedHandler = ( event ) => {
        this.setState({
         selectedFile: event.target.files[0]
        });    
    };

    handleSubmit = event => {
        event.preventDefault();
        const { full_name, age, about_me, breed, size, gender, city, loc_state, zip_code } = event.target;
       
        this.setState({ error: null });
        const data = new FormData();
        // If file selected
        if ( this.state.selectedFile ) {
            data.append( 'profileImage', this.state.selectedFile, this.state.selectedFile.name );
            axios.post( `${config.API_ENDPOINT}/profile/profile-img-upload`, data, {
                headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                }
            })
            .then( ( response ) => {
                if ( 200 === response.status ) {
                    // If file size is larger than expected.
                    if( response.data.error ) {
                        if ( 'LIMIT_FILE_SIZE' === response.data.error.code ) {  
                            console.log('Max size: 2MB', 'red')
                        } else {
                            console.log( response.data );        
                        }
                    } else {
                        // Success
                        let fileName = response.data.location;
            
                        this.setState({fileName})
                        DoggodateApiService.addDog({
                            full_name: full_name.value,
                            age: age.value,
                            about_me: about_me.value,
                            breed: breed.value,
                            size: size.value,
                            gender: gender.value,
                            owner_id: TokenService.getUserId(),
                            picture: this.state.fileName,
                            city: city.value,
                            loc_state: loc_state.value, 
                            zip_code: zip_code.value
                
                        })
                        .then((res) => {
                            full_name.value = ''
                            age.value= ''
                            about_me.value= ''
                            breed.value= ''
                            size.value= ''
                            gender.value= ''
                            this.props.history.push('/feed')
                            console.log(res)
                        })
                        .catch(err => {
                            this.setState({ error: err })
                        })
                    }
                }
            }).catch( ( error ) => {
                    console.log( error );
            });
        } else {
              console.log('Please upload file')          
        }   
    }

    renderInvalidMessage = () => {
        return <p>{this.state.error}</p>
    }

    render() { 
        const { error } = this.state;
        return (  
            <div>
                <ProfileNav />
                <main>
                    <div className='event-form-container'>
                        <form
                            onSubmit={this.handleSubmit}
                        >
                            {(error) ? this.renderInvalidMessage() : null}
                                <div className='event-form-fields event-form-border'>
                                    <legend>Dog's Profile</legend> 
                                    <input type="file" onChange={this.singleFileChangedHandler}/>                                 
                                    <label htmlFor='full_name'>Name</label>
                                    <input type='text' name='full_name' id='full_name' required/>
                                    <label htmlFor='about_me'>About me</label>
                                    <textarea id='about_me' name='about_me'
                                                rows='5' cols='33'>
                                    </textarea>
                                    <label>Breed</label>
                                    <select name='breed' id='breed' required>
                                    <option value='Poodle (Toy)' selected>Poodle (Toy)</option>
                                    </select>
                                    <label>Size</label>
                                    <select name='size' id='size' required>
                                    <option value='Small' selected>Small</option>
                                    </select>
                                    <label htmlFor='age'>Age</label>
                                    <input type='text' name='age' id='age'/>
                                    <div className='gender-box'>
                                        <label>Gender</label>
                                        <input type='radio' id='female' name='gender' value='female'
                                        checked />
                                        <label htmlFor='female'>Female</label>
                                        <input type='radio' id='male' name='gender' value='male' />
                                        <label htmlFor='male'>Male</label>
                                    </div>
                                    <label htmlFor='city'>City</label>
                                    <input type='text' name='city' id='city' required/>
                                    <label htmlFor='loc_state'>State</label>
                                    <input type='text' name='loc_state' id='loc_state' required/>
                                    <label htmlFor='zip_code'>Zip Code</label>
                                    <input type='text' name='zip_code' id='zip_code' required/>
                                    <button type='submit' className='btn'>Save</button>         
                                </div>                           
                        </form>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}
 
export default ProfileSetup;