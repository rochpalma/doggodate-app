import React, { Component } from 'react';
import Context from "../../Context";
import HomeNav from '../HomeNav/HomeNav';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import './Signup.css';
import AuthApiService from '../../services/auth-api-service';

class Signup extends Component {
    static contextType = Context;

    state = {
        error: null
    }

    handleSubmit = event => {
        event.preventDefault();
        const { first_name, last_name, email, password } = event.target;

        this.setState({ error: null });
        AuthApiService.postUser({
            full_name: first_name.value +' '+ last_name.value,
            email: email.value,
            password: password.value,
        })
        .then(user => {
            first_name.value = ''
            last_name.value = ''
            email.value = ''
            password.value = ''
            this.props.history.push('/signin')
        })
        .catch(err => {
            this.setState({ error: err.error.message })
        })
    }

    renderInvalidMessage = () => {
        return <p>{this.state.error}</p>
    }

    render() {
        const { error } = this.state; 
        return (  
            <div className='main-display signup-bg'>
                <HomeNav />
                <main>
                    <div className='userform-container'>
                        <form 
                            className='form-border'
                            onSubmit={this.handleSubmit}
                        > 
                        {(error) ? this.renderInvalidMessage() : null}                
                            <div className='form-fields'>
                                <label for='first_name'>First Name</label>
                                <input type='text' name='first_name' id='first_name' required/>
                                <label for='last_name'>Last Name</label>
                                <input type='text' name='last_name' id='last_name' required/>
                                <label for='email'>Email Address</label>
                                <input type='email' name='email' id='email' required/>
                                <label for='password'>Password</label>
                                <input type='password' name='password' id='password' required/>
                                <label for='password-2'>Confirm Password</label>
                                <input type='password' name='password-2' id='password-2' required className='red'/>
                                {/* <Link to='/setup' className='btn'>Sign up</Link> */}
                                <button type='submit' className='btn'>Sign up</button>
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