import React, { Component } from 'react';
import Context from '../../Context';
import DoggodateApiService from '../../services/doggodate-api-service';
import ProfileNav from '../ProfileNav/ProfileNav';
import TokenService from '../../services/token-service';

class LoginUpdate extends Component {
    static contextType = Context;

	state = {
        error: null
    }

    handleSubmit = event => {
        event.preventDefault();
        const { password } = event.target;

        this.setState({ error: null });
        DoggodateApiService.updateUser(TokenService.getUserId(),{
            password:  password.value,
        })
        .then(res => {
            this.props.history.push('/myprofile')
        })
        .catch(err => {
            this.setState({ error: err.error.message })
        })
    }

    handleClickCancel = () => {
        this.props.history.goBack();
    };

    render() {
        return (
            <Context.Consumer> 
            { (context) => {
                return(
                    <div className='PageWrapper'>
                    <ProfileNav />
                    <div className='MainContent'>
                        <h1>Profile Summary</h1>    
                            <section className="panel panel-primary">
                                <div className="panel-heading">
                                    <h2 className="panel-title">LOGIN INFORMATION</h2>
                                    <br/>
                                </div>
                                
                                <form 
                                    className="panel-body"
                                    onSubmit={this.handleSubmit}
                                >
                                    <div className="row">								   
                                        <div className="col-xs-3 text-right">
                                            <label htmlFor='email'>Email Address</label>
                                        </div>
                                        <div className="col-xs-9">
                                            <p>{context.user.email}</p>
                                        </div>
                                                        
                                    </div>
                                    <div className="row">								   
                                        <div className="col-xs-3 text-right">
                                            <label htmlFor='password'>Password</label>
                                        </div>
                                        <div className="col-xs-9">
                                            <input type='password' name='password' id='password'/>
                                        </div>
                                                        
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-3 text-right">
                                            <label htmlFor='password-2'>Confirm Password</label>
                                        </div>
                                        <div className="col-xs-9">
                                            <input type='password' name='password-2' id='password-2'/>
                                        </div>	
                                    </div>
                                    <div className="row">								   
                                        <div className="col-xs-3 text-right">
                                            <button type='submit' className='btn'>Save</button>
                                        </div>
                                        <div className="col-xs-9">
                                            <button type='button' onClick={this.handleClickCancel} className='btn'>Cancel</button>
                                        </div>          							
                                    </div>									
                                </form>
                            </section>
                        </div>	
                    </div>      
                )
            }}
            </Context.Consumer>     
        );
    }
}
 
export default LoginUpdate;