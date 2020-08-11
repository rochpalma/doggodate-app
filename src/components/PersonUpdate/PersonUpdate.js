import React, { Component } from 'react';
import Context from '../../Context';
import DoggodateApiService from '../../services/doggodate-api-service';
import ProfileNav from '../ProfileNav/ProfileNav';
import TokenService from '../../services/token-service';

class PersonUpdate extends Component {
    static contextType = Context;

	state = {
        error: null
    }

    handleSubmit = event => {
        event.preventDefault();
        const { first_name, last_name } = event.target;

        this.setState({ error: null });
        DoggodateApiService.updateUser(TokenService.getUserId(),{
            full_name: first_name.value +' '+ last_name.value,
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
                    // let full_name = context.user.full_name.split(' ');
                    // let first_name = full_name.slice(0, -1).join("");
                    // let last_name = full_name.pop();
                    // console.log(full_name)
                    return(
                     <div className='PageWrapper'>
                     <ProfileNav />
                     <div className='MainContent'>
                         <h1>Profile Summary</h1>    
                             <section className="panel panel-primary">
                                 <div className="panel-heading">
                                     <h2 className="panel-title">PERSON INFORMATION</h2>
                                     <br/>
                                 </div>
                                 
                                 <form 
                                     className="panel-body"
                                     onSubmit={this.handleSubmit}
                                 >						   
                                     <div className="row">								   
                                         <div className="col-xs-3 text-right">
                                             <label htmlFor='first_name'>First Name</label>
                                         </div>
                                         <div className="col-xs-9">
                                             {/* <input type='text' name='first_name' id='first_name' value={first_name} required/> */}
                                         </div>
                                         <div className="col-xs-3 text-right">
                                             <label htmlFor='last_name'>Last Name</label>
                                         </div>
                                         <div className="col-xs-9">
                                             {/* <input type='text' name='last_name' id='last_name' value={last_name} required/>	 */}
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
                 </div>)
                }}
            </Context.Consumer>  
        );
    }
}
 
export default PersonUpdate;