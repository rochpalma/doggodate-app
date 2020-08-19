import React, { Component } from 'react';
import Context from '../../Context';
import DoggodateApiService from '../../services/doggodate-api-service';
import ProfileNav from '../ProfileNav/ProfileNav';
import TokenService from '../../services/token-service';
//to do
class PhotoUpdate extends Component {
    static contextType = Context;

	state = {
        error: null
    }

    handleSubmit = event => {
        event.preventDefault();
        const { home, mobile } = event.target;

        this.setState({ error: null });
        DoggodateApiService.updateUser(TokenService.getUserId(),{
            home:  home.value,
			mobile: mobile.value,
        })
        .then(res => {
            this.props.history.push('/mydogprofileupdate')
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
                        <div className='PagWrapper'>
                        <ProfileNav />
                        <div className='MainContent'>
                            <h1>Profile Summary</h1>    
                                <section className="panel panel-primary">
                                    <div className="panel-heading">
                                        <h2 className="panel-title">PHONE INFORMATION</h2>
                                        <br/>
                                    </div>
                                    
                                    <form 
                                        className="panel-body"
                                        onSubmit={this.handleSubmit}
                                    >
                                        <div className="row">								   
                                            <div className="col-xs-3 text-right">
                                                 <label htmlFor='mobile'>Mobile</label>
                                            </div>
                                            <div className="col-xs-9">
                                                <input type='text' name='mobile' id='mobile' defaultValue={context.user.mobile}/>
                                            </div>
                                                              
                                        </div>
                                        <div className="row">								   
                                            <div className="col-xs-3 text-right">
                                                 <label htmlFor='home'>Home</label>
                                            </div>
                                            <div className="col-xs-9">
                                                <input type='text' name='home' id='home' defaultValue={context.user.home}/>
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
                    )}}
            </Context.Consumer>       
            
        );
    }
}
 
export default PhotoUpdate;