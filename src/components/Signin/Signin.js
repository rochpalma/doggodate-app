import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/DoggoDate_03.png';
import './Signin.css'
import Context from '../../Context';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import DoggodateApiService from '../../services/doggodate-api-service';

class Signin extends Component {
    static contextType = Context;

    state = { 
        error: null,
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ error: null });
        const { email, password } = event.target;

        AuthApiService.postLogin({
            email: email.value,
            password: password.value
        })
        .then(res => {
            email.value = '';
            password.value = '';
            TokenService.saveAuthToken(res.authToken);
            this.handleLoginSuccess();       
        })
        .catch(err => {
            this.setState({ error: err.error })
        });
    }

    handleLoginSuccess = () => {
         DoggodateApiService.getUser()
            .then(user => {
                this.context.getUserData(user);
                TokenService.saveUserId(user.id);
                this.props.history.push("/feed");
            })
            .catch(this.context.setError);
        DoggodateApiService.getDogsByOwner(TokenService.getUserId())
        .then(dogs => {
            this.context.setMyDogs(dogs)
        }
        )
        .catch(this.context.setError);
           
    };

    renderInvalidMessage = () => {
        return (
            <p>Invalid username or password</p>
        );
    }

    render() { 
        const { error } = this.state;
        return (  
            <div className='main-display signin-bg'>
                <header>
                    <Link to ='/'><img src={logo} alt='doggodate logo' className='logo'/></Link>
                </header>
                <main>
                    <div className='userform-container'>
                        <form 
                            className='signin-border'
                            onSubmit={ this.handleSubmit }
                        >
                            <fieldset> 
                                <div className='form-fields'>                             
                                    <legend>Sign in to your account</legend>
                                    { (error) ? this.renderInvalidMessage() : null }                   
                                    <label htmlFor='email'>Username</label>
                                    <input type='text' name='email' id='email' required/>
                                    <label htmlFor='password'>Password</label>
                                    <input type='password' name='password' id='password' required/>
                                    <button type='submit' className="page-btn">
                                        Log In
                                    </button>
                                    <Link to='/signup' className='btn'>Sign up</Link>
                                </div>                                                
                            </fieldset>                                 
                        </form>
                    </div>
                </main>
            </div>
        );
    }
}
 
export default Signin;