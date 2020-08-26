import React, { Component } from 'react';
import Context from '../../Context';
import ProfileNav from '../ProfileNav/ProfileNav';
import { Link } from 'react-router-dom';

class MyDogProfileUpdate extends Component {
    static contextType = Context;
    
    render() {
        return (
            <Context.Consumer> 
                { (context) => {
                    console.log(context)
                    const dog = context.myDogs[0];
                    return(
                        <div className='PagWrapper'>
                            <ProfileNav />
                            <div className='MainContent'>
                                <h1>Profile Summary</h1>    
                                    <section className="panel panel-primary">
                                        <div className="panel-heading">
                                            <h2 className="panel-title">PHOTO INFORMATION</h2>
                                            <div className='update-btn-container'>
                                                <Link to='/photoupdate' className='update-btn btn btn-primary btn-sm'>Update</Link>
                                            </div>
                                            <br/>
                                        </div>
                                        
                                        <div className="panel-body">                                         
                                            <div className="row">    
                                                <div className="col-xs-9 center">
                                                <img src={dog.picture} alt={`${dog.full_name}'s photo`} className='dp-img'/>
                                                </div>                                            
                                            </div>                                          
                                        </div>
                                    </section>
                                    <section className="panel panel-primary">
                                        <div className="panel-heading">
                                            <h2 className="panel-title">DOG INFORMATION</h2>
                                            <div className='update-btn-container'>
                                                <Link to='/doginfoupdate' className='update-btn btn btn-primary btn-sm'>Update</Link>
                                            </div>
                                            <br/>
                                        </div>                                      
                                        <div className="panel-body">                                         
                                            <div className="row">                                              
                                                <div className="col-xs-3 text-right">
                                                    <label>Name:</label>
                                                </div>
                                                <div className="col-xs-9">{dog.full_name}</div>
                                            </div>
                                        </div>
                                       <div className="panel-body">   
                                           <div className="row">
                                               <div className="col-xs-3 text-right">
                                                   <label>Breed:</label>
                                               </div>
                                               <div className="col-xs-9">{dog.breed}</div>
                                           </div>
                                       </div>
                                       <div className="panel-body">
                                           <div className="row">
                                               <div className="col-xs-3 text-right">
                                                   <label>Gender:</label>
                                               </div>
                                               <div className="col-xs-9">{dog.gender}</div>
                                           </div>
                                       </div>
                                       <div className="panel-body">
                                           <div className="row">
                                               <div className="col-xs-3 text-right">
                                                   <label>Age:</label>
                                               </div>
                                               <div className="col-xs-9">{dog.age}</div>
                                           </div>
                                       </div>
                                       <div className="panel-body">
                                           <div className="row">
                                               <div className="col-xs-3 text-right">
                                                   <label>Size:</label>
                                               </div>
                                               <div className="col-xs-9">{dog.size}</div>
                                           </div>
                                       </div>
                                       <div className="panel-body">
                                           <div className="row">
                                               <div className="col-xs-3 text-right">
                                                   <label>City:</label>
                                               </div>
                                               <div className="col-xs-9">{dog.city}</div>
                                           </div>
                                       </div>
                                       <div className="panel-body">
                                           <div className="row">                
                                               <div className="col-xs-3 text-right">
                                                   <label>State:</label>
                                               </div>
                                               <div className="col-xs-9">{dog.loc_state}</div>
                                           </div>
                                       </div>
                                       <div className="panel-body">                                        
                                           <div className="row">                                              
                                               <div className="col-xs-3 text-right">
                                                   <label>Zip Code:</label>
                                               </div>
                                               <div className="col-xs-9">{dog.zip_code}</div>                                            
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
 
export default MyDogProfileUpdate;

