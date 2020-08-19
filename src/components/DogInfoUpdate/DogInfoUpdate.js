import React, { Component } from 'react';
import Context from '../../Context';
import DoggodateApiService from '../../services/doggodate-api-service';
import ProfileNav from '../ProfileNav/ProfileNav';
import TokenService from '../../services/token-service';

class DogInfoUpdate extends Component {
    static contextType = Context;

	state = {
        error: null
    }

    handleSubmit = event => {
        event.preventDefault();
        const { full_name, breed, gender, age, size, city, loc_state, zip_code } = event.target;

        this.setState({ error: null });
        DoggodateApiService.updateDog(TokenService.getDogId(),{
            full_name: full_name.value,
            breed: breed.value,
            gender: gender.value,
            age: age.value,
            size: size.value, 
            city: city.value, 
            loc_state: loc_state.value,
            zip_code: zip_code.value
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
                    const dog = context.myDogs[0];
                    return(
                        <div className='PagWrapper'>
                        <ProfileNav />
                        <div className='MainContent'>
                            <h1>Profile Summary</h1>    
                                <section className="panel panel-primary">
                                    <div className="panel-heading">
                                        <h2 className="panel-title">DOG INFORMATION</h2>
                                        <br/>
                                    </div>
                                    
                                    <form 
                                        className="panel-body"
                                        onSubmit={this.handleSubmit}
                                    >
                                        <div className="row">								   
                                            <div className="col-xs-3 text-right">
                                                 <label htmlFor='full_name'>Name</label>
                                            </div>
                                            <div className="col-xs-9">
                                                <input type='text' name='full_name' id='full_name' defaultValue={dog.full_name}/>
                                            </div>
                                                              
                                        </div>
                                        <div className="row">								   
                                            <div className="col-xs-3 text-right">
                                                 <label htmlFor='breed'>Breed</label>
                                            </div>
                                            <div className="col-xs-9">
                                                <input type='text' name='breed' id='breed' defaultValue={dog.breed}/>
                                            </div>     							
                                        </div>
                                        <div className="row">								   
                                            <div className="col-xs-3 text-right">
                                                 <label htmlFor='gender'>Gender</label>
                                            </div>
                                            <div className="col-xs-9">
                                                <input type='text' name='gender' id='gender' defaultValue={dog.gender}/>
                                            </div>
                                                              
                                        </div>
                                        <div className="row">								   
                                            <div className="col-xs-3 text-right">
                                                 <label htmlFor='age'>Age</label>
                                            </div>
                                            <div className="col-xs-9">
                                                <input type='text' name='age' id='age' defaultValue={dog.age}/>
                                            </div>     							
                                        </div>
                                        <div className="row">								   
                                            <div className="col-xs-3 text-right">
                                                 <label htmlFor='size'>Size</label>
                                            </div>
                                            <div className="col-xs-9">
                                                <input type='text' name='size' id='size' defaultValue={dog.size}/>
                                            </div>                              
                                        </div>
                                        <div className="row">								   
                                            <div className="col-xs-3 text-right">
                                                 <label htmlFor='city'>City</label>
                                            </div>
                                            <div className="col-xs-9">
                                                <input type='text' name='city' id='city' defaultValue={dog.city}/>
                                            </div>     							
                                        </div>
                                        <div className="row">								   
                                            <div className="col-xs-3 text-right">
                                                 <label htmlFor='loc_state'>State</label>
                                            </div>
                                            <div className="col-xs-9">
                                                <input type='text' name='loc_state' id='loc_state' defaultValue={dog.loc_state}/>
                                            </div>
                                                              
                                        </div>
                                        <div className="row">								   
                                            <div className="col-xs-3 text-right">
                                                 <label htmlFor='zip_code'>Zip Code</label>
                                            </div>
                                            <div className="col-xs-9">
                                                <input type='text' name='zip_code' id='zip_code' defaultValue={dog.zip_code}/>
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
 
export default DogInfoUpdate;