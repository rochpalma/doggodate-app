import React, { Component } from 'react';
import Footer from '../Footer/Footer';


class Signin extends Component {
    render() { 
        return (  
            <div>
                <header>
                    <img src='../DogTinder.png' alt='dog tinder logo' />
                </header>
                <main>
                <form>
                    <fieldset>
                    <legend>Sign in to your account</legend>
                    <div class ='input-container'>
                        <label for='username'>Username</label>
                        <input type='text' name='username' id='username' required/>
                        <label for='password'>Password</label>
                        <input type='text' name='password' id='password' required/>
                        <input type='submit' value='Sign in' id='submit' /> 
                    </div>                           
                    </fieldset>         
                </form>
                </main>
                <Footer />
            </div>
        );
    }
}
 
export default Signin;