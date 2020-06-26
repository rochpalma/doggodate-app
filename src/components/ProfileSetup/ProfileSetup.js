import React, { Component } from 'react';
import ProfileNav from '../ProfileNav/ProfileNav';
import Footer from '../Footer/Footer';
import './ProfileSetup.css';


class ProfileSetup extends Component {
    render() { 
        return (  
            <div>
                <ProfileNav />
                <main>
                    <div className='userform-container'>
                        <form>
                            <fieldset>
                                <div className='form-fields'>
                                    <legend>Dog Profile</legend>       
                                    <button>Add Photos</button>
                                    <label for='name'>Name</label>
                                    <input type='text' name='name' id='name' required/>
                                    <label for='about-me'>About me</label>
                                    <textarea id='about-me' name='about-me'
                                                rows='5' cols='33'>
                                    </textarea>
                                    <label>Breed</label>
                                    <select name='dogs' id='dogs' required>
                                    <option value='poodle' selected>Poodle</option>
                                    </select>
                                    <label>Size</label>
                                    <select name='size' id='size' required>
                                    <option value='small' selected>Small</option>
                                    </select>
                                    <label for='age'>Age</label>
                                    <input type='text' name='age' id='age'/>
                                    <div className='gender-box'>
                                        <label>Gender</label>
                                        <input type='radio' id='female' name='gender' value='female'
                                        checked />
                                        <label for='female'>Female</label>
                                        <input type='radio' id='male' name='gender' value='male' />
                                        <label for='male'>Male</label>
                                    </div>
                                    <input type='submit' value='Save' id='submit' />           
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