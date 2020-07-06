import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/DoggoDate_03.png';
import './Signin.css'

class Signin extends Component {
    render() { 
        return (  
            <div className='main-display signin-bg'>
                <header>
                    <Link to ='/'><img src={logo} alt='dog tinder logo' className='logo'/></Link>
                </header>
                <main>
                    <div className='userform-container'>
                        <form className='signin-border'>
                            <fieldset> 
                                <div className='form-fields'>                             
                                    <legend>Sign in to your account</legend>                   
                                    <label for='username'>Username</label>
                                    <input type='text' name='username' id='username' required/>
                                    <label for='password'>Password</label>
                                    <input type='text' name='password' id='password' required/>
                                    <Link to='/feed' className='btn'>Sign in</Link> 
                                    <Link to='/signup' className='btn'>Sign up</Link>   
                                </div>                                                
                            </fieldset>                                 
                        </form>
                    </div>
                </main>
                {/* <Footer /> */}
            </div>
        );
    }
}
 
export default Signin;