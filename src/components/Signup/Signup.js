import React, { Component } from 'react';
import HomeNav from '../HomeNav/HomeNav';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import './Signup.css';

class Signup extends Component {
    render() { 
        return (  
            <div className='main-display signup-bg'>
                <HomeNav />
                <main>
                    <div className='userform-container'>
                        <form className='form-border'>                 
                            <div className='form-fields'>
                                <label for='first-name'>First Name</label>
                                <input type='text' name='first-name' id='first-name' required/>
                                <label for='last-name'>Last Name</label>
                                <input type='text' name='last-name' id='last-name' required/>
                                <label for='email-add'>Email Address</label>
                                <input type='email' name='email-add' id='email-add' required/>
                                <label for='password'>Password</label>
                                <input type='password' name='password' id='password' required/>
                                <label for='password-2'>Confirm Password</label>
                                <input type='password' name='password-2' id='password-2' required className='red'/>
                                <Link to='/setup' className='btn'>Sign up</Link>
                            </div>
                        </form>
                    </div>
                </main>
                {/* <Footer /> */}
            </div>
        );
    }
}
 
export default Signup;