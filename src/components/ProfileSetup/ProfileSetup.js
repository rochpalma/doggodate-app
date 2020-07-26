import React, { Component } from 'react';
import Context from "../../Context";
import ProfileNav from '../ProfileNav/ProfileNav';
import Footer from '../Footer/Footer';
import './ProfileSetup.css';
import DoggodateApiService from '../../services/doggodate-api-service';
import TokenService from '../../services/token-service';

class ProfileSetup extends Component {
    static contextType = Context;

    state = {
        error: null
    }

    handleSubmit = event => {
        event.preventDefault();
        const { full_name, age, about_me, breed, size, gender } = event.target;

        this.setState({ error: null });
        DoggodateApiService.addDog({
            full_name: full_name.value,
            age: age.value,
            about_me: about_me.value,
            breed: breed.value,
            size: size.value,
            gender: gender.value,
            owner_id: TokenService.getUserId()

        })
        .then(dog => {
            full_name.value = ''
            age.value= ''
            about_me.value= ''
            breed.value= ''
            size.value= ''
            gender.value= ''
            this.props.history.push('/feed')
        })
        .catch(err => {
            console.log(err)
            // this.setState({ error: err.error })
        })
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
                    <div className='userform-container'>
                        <form
                            onSubmit={this.handleSubmit}
                        >
                            {(error) ? this.renderInvalidMessage() : null}
                            <fieldset>
                                <div className='form-fields'>
                                    <legend>Dog's Profile</legend>       
                                    <button>Add Photos</button>
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
                                    {/* <input type='submit' value='Save' id='submit' />  */}
                                    <button type='submit' className='btn'>Save</button>          
                                </div>                           
                            </fieldset>         
                        </form>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}
 
export default ProfileSetup;