import React, { Component } from 'react';
import Context from '../../Context';
import DoggodateApiService from '../../services/doggodate-api-service';
import ProfileNav from '../ProfileNav/ProfileNav';
import { Link } from 'react-router-dom';

class MyProfile extends Component {
    static contextType = Context;

    componentDidMount() {
        DoggodateApiService.getUser()
        .then(user => {
            this.context.getUserData(user);
        })
        .catch(this.context.setError);
    }

    render() {
        return (
            <Context.Consumer> 
                { (context) => {
                    console.log(context)
                    return(
                        <div className='PagWrapper'>
                            <ProfileNav />
                            <div className='MainContent'>
                                <h1>Profile Summary</h1>    
                                    <section className="panel panel-primary">
                                        <div className="panel-heading">
                                            <h2 className="panel-title">PERSON INFORMATION</h2>
                                            <div className='update-btn-container'>
                                                <Link to='/personupdate' className='update-btn btn btn-primary btn-sm'>Update</Link>
                                            </div>
                                            <br/>
                                        </div>
                                        
                                        <div className="panel-body">
                                           
                                            <div className="row">
                                               
                                                <div className="col-xs-3 text-right">
                                                    <label>Name:</label>
                                                </div>
                                                <div className="col-xs-9">{context.user.full_name}</div>
                                               
                                            </div>
                                           
                                        </div>
                                    </section>
                                    <section className="panel panel-primary">
                                        <div className="panel-heading">
                                            <h2 className="panel-title">LOGIN INFORMATION</h2>
                                            <div className='update-btn-container'>
                                            <Link to='/loginupdate' className='update-btn btn btn-primary btn-sm'>Update</Link>
                                            </div>
                                            <br/>
                                        </div>
                                        
                                        <div className="panel-body">
                                            <div className="row">
                                                <div className="col-xs-3 text-right">
                                                    <label>Email:</label>
                                                </div>
                                                <div className="col-xs-9">{context.user.email}</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-xs-3 text-right">
                                                    <label>Password:</label>
                                                </div>
                                                <div className="col-xs-9">********</div>
                                            </div>
                                        </div>
                                    </section>
                                    <section className="panel panel-primary">
                                        <div className="panel-heading">
                                            <h2 className="panel-title">PHONE INFORMATION</h2>
                                            <div className='update-btn-container'>
                                            <Link to='/phoneupdate' className='update-btn btn btn-primary btn-sm'>Update</Link>
                                            </div>
                                            <br/>
                                        </div>
                                        
                                        <div className="panel-body">
                                            
                                            <div className="row">
                                                <div className="col-xs-3 text-right">
                                                    <label>Home:</label>
                                                </div>
                                                <div className="col-xs-9">{context.user.home}</div>
                                            </div>
                                            <div className="row">
                                                
                                                <div className="col-xs-3 text-right">
                                                    <label>Mobile:</label>
                                                </div>
                                                <div className="col-xs-9">{context.user.mobile}</div>
                                            </div>
                                        </div>
                                    </section>
                         
                            </div>
                                           
                        </div>      
                    )
                }}
            </Context.Consumer>   
            
        );
    }
}
 
export default MyProfile;

