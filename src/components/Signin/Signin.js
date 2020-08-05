import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/DoggoDate_03.png';
import './Signin.css'
import Context from '../../Context';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import DoggodateApiService from '../../services/doggodate-api-service';

class Signin extends Component {
    static contextType = Context;

    state = { error: null };

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
            TokenService.saveUserId(res.user_id);
            this.handleLoginSuccess();
            
        })
        .catch(err => {
            console.log('merong error sa login')
            this.setState({ error: err.error })
        });
    }

    handleLoginSuccess = () => {
        DoggodateApiService.getUser()
        //   .then((res) => {
        //     this.context.getUserData(res);
        //   })
         .then(() => this.props.history.push("/feed"))
         .catch(err => {
            console.log(err)
         })
           
        //  const userId = TokenService.getUserId();
        //  console.log('owner ' + userId)
        //  DoggodateApiService.getDogsByOwner(userId)
        //     .then(dogs => {
        //         this.context.setMyDogs(dogs)
        //         console.log('my dogs' + JSON.stringify(dogs));
        //         console.log(this.context.myDogs)
        //        // TokenService.saveDogId(this.context.myDogs[0].id)
        //     }
                
        //     //console.log(JSON.stringify(dogs))
        //     )
        //     .catch(this.context.setError);
        //    // console.log('dog id ' + TokenService.getDogId())
        // DoggodateApiService.getComments(TokenService.getDogId())
        //     .then(res => {
        //        // this.context.clearDogProfile();
        //         this.context.setComments(res);
        //         console.log("context" +JSON.stringify(res))     
        //     })
        //     // .then(this.context.setComments)
        //     // .catch(this.context.setError);
        //     .catch(err => console.log(err))
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
                    <Link to ='/'><img src={logo} alt='dog tinder logo' className='logo'/></Link>
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
                                    {/* <Link to='/feed' className='btn'>Sign in</Link> 
                                    <Link to='/signup' className='btn'>Sign up</Link>    */}
                                    <button type='submit' className="page-btn">
                                        Log In
                                    </button>
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