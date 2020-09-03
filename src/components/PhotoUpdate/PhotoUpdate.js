import React, { Component } from 'react';
import Context from '../../Context';
import DoggodateApiService from '../../services/doggodate-api-service';
import ProfileNav from '../ProfileNav/ProfileNav';
import TokenService from '../../services/token-service';
import axios from 'axios';
import config from '../config';

class PhotoUpdate extends Component {
    static contextType = Context;

	state = {
        error: null,
        selectedFile: null,
        fileName: null
    }

    singleFileChangedHandler = ( event ) => {
        this.setState({
         selectedFile: event.target.files[0]
        });    
    };

    handleSubmit = event => {
        event.preventDefault();
        
        this.setState({ error: null });
        const data = new FormData();

        // If file selected
          if ( this.state.selectedFile ) {
        data.append( 'profileImage', this.state.selectedFile, this.state.selectedFile.name );
        axios.post( `${config.API_ENDPOINT}/profile/profile-img-upload`, data, {
            headers: {
             'accept': 'application/json',
             'Accept-Language': 'en-US,en;q=0.8',
             'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
            }
           })
            .then( ( response ) => {
        if ( 200 === response.status ) {
              // If file size is larger than expected.
            if( response.data.error ) {
                if ( 'LIMIT_FILE_SIZE' === response.data.error.code ) {
                    console.log('Max size: 2MB', 'red')
                } else {
                 // If not the given file type
                }
            } else {
               // Success
               let fileName = response.data.location;
               this.setState({fileName})
                DoggodateApiService.updateDog(TokenService.getDogId(),{
                    picture: this.state.fileName,
                })
                .then((res) => {
                    this.props.history.push('/mydogprofileupdate')
                })
                .catch(err => {
                    console.log(err)
                    // this.setState({ error: err.error })
                })
            }
             }
            }).catch( ( error ) => {
                this.setState({ error })
           
           });
          } else {
              console.log('Please upload file')          
          }
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
                                        <h2 className="panel-title">PHOTO INFORMATION</h2>
                                        <br/>
                                    </div>
                                    
                                    <form 
                                        className="panel-body"
                                        onSubmit={this.handleSubmit}
                                    >
                                        <div className="row">								   
                                            <div className="col-xs-3 text-right">
                                                 <label htmlFor='picture'>Picture</label>
                                            </div>
                                            <input type="file" onChange={this.singleFileChangedHandler}/>
                                                              
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