import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import logo from '../../DogTinder.png';
import './Signin.css'


class Signin extends Component {
    render() { 
        return (  
            <div>
                <header>
                    <img src={logo} alt='dog tinder logo' className='logo'/>
                </header>
                <main>
                    <div className='userform-container'>
                        <form>
                            <fieldset>
                                <div className='form-fields'>
                                    <legend>Sign in to your account</legend>                   
                                    <label for='username'>Username</label>
                                    <input type='text' name='username' id='username' required/>
                                    <label for='password'>Password</label>
                                    <input type='text' name='password' id='password' required/>
                                    <Link to='/feed'>Sign in</Link>
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
 
export default Signin;