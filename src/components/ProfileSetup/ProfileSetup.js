import React, { Component } from 'react';
import ProfileNav from '../ProfileNav/ProfileNav';
import Footer from '../Footer/Footer';


class ProfileSetup extends Component {
    render() { 
        return (  
            <div>
                <ProfileNav />
                <main>
                <form>
                    <fieldset>
                    <legend>Dog Profile</legend>
                    <div class ='input-container'>
                        <button>Add Photos</button>
                        <label for='name'>Name</label>
                        <input type='text' name='name' id='name' required/>
                        <label for='about-me'>About me</label>
                        <textarea id='about-me' name='about-me'
                                    rows='5' cols='33'>
                        </textarea>
                        <select name='dogs' id='dogs' required>
                                        <option value='poodle' selected>Poodle</option>
                        </select>
                        <select name='size' id='size' required>
                                        <option value='small' selected>Small</option>
                        </select>
                        <label for='age'>Age</label>
                        <input type='text' name='age' id='age'/>
                        <label>Gender</label>
                        <input type='radio' id='female' name='gender' value='female'
                    checked />
                        <label for='female'>Female</label>
                        <input type='radio' id='male' name='gender' value='male' />
                        <label for='male'>Male</label>
                        <input type='submit' value='Save' id='submit' /> 
                    </div>                           
                    </fieldset>         
                </form>
                </main>
                <Footer />
            </div>
        );
    }
}
 
export default ProfileSetup;