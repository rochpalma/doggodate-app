import React, { Component } from 'react';
import Context from "../../Context";
import ProfileNav from '../ProfileNav/ProfileNav';
import Footer from '../Footer/Footer';
import './ProfileSetup.css';
import DoggodateApiService from '../../services/doggodate-api-service';
import TokenService from '../../services/token-service';
import axios from 'axios';
import $ from 'jquery';

class ProfileSetup extends Component {
    static contextType = Context;

    state = {
        error: null,
        selectedFile: null,
    }

    singleFileChangedHandler = ( event ) => {
        this.setState({
         selectedFile: event.target.files[0]
        });
       };

    handleSubmit = event => {
        event.preventDefault();
        const { full_name, age, about_me, breed, size, gender } = event.target;

        this.setState({ error: null });
        DoggodateApiService.addDog({
            full_name: full_name.value,
            age: age.value,
            about_me: about_me.value,
            breed: breed.value,
            size: size.value,
            gender: gender.value,
            owner_id: TokenService.getUserId(),
            picture: event.target.files

        })
        .then(() => {
            full_name.value = ''
            age.value= ''
            about_me.value= ''
            breed.value= ''
            size.value= ''
            gender.value= ''
            this.props.history.push('/feed')
        })
        .catch(err => {
            console.log(err)
            // this.setState({ error: err.error })
        })
    }

    handleUpload = () => {
        const data = new FormData();
        // If file selected
          if ( this.state.selectedFile ) {
        data.append( 'profileImage', this.state.selectedFile, this.state.selectedFile.name );
        axios.post( 'http://localhost:8000/api/profile/profile-img-upload', data, {
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
                // this.ocShowAlert( 'Max size: 2MB', 'red' );
                console.log('Max size: 2MB', 'red')
               } else {
                console.log( response.data );
        // If not the given file type
                this.ocShowAlert( response.data.error, 'red' );
               }
              } else {
               // Success
               let fileName = response.data;
               console.log( 'fileName', fileName.location );
               this.ocShowAlert( 'File Uploaded', '#3089cf' );
              }
             }
            }).catch( ( error ) => {
                console.log( error );
            // If another error
            // this.ocShowAlert( error, 'red' );
           });
          } else {
              console.log('Please upload file')
           // if file not selected throw error
           this.ocShowAlert( 'Please upload file', 'red' );
          }
    }
    // ShowAlert Function
	ocShowAlert = ( message, background = '#3089cf' ) => {
		let alertContainer = document.querySelector( '#oc-alert-container' ),
			alertEl = document.createElement( 'div' ),
			textNode = document.createTextNode( message );
		alertEl.setAttribute( 'class', 'oc-alert-pop-up' );
		$( alertEl ).css( 'background', background );
		alertEl.appendChild( textNode );
		alertContainer.appendChild( alertEl );
		setTimeout( function () {
			$( alertEl ).fadeOut( 'slow' );
			$( alertEl ).remove();
		}, 3000 );
	};

    renderInvalidMessage = () => {
        return <p>{this.state.error}</p>
    }

    render() { 
        const { error } = this.state;
        console.log(this.state)
        return (  
            // <div>
            //     <ProfileNav />
            //     <main>
            //         <div className='userform-container'>
            //             <form
            //                 // onSubmit={this.handleSubmit}
            //             >
            //                 {(error) ? this.renderInvalidMessage() : null}
            //                 <fieldset>
            //                     <div className='form-fields'>
            //                         <legend>Dog's Profile</legend> 
            //                         <input type="file" onChange={this.singleFileChangedHandler}/>
            //                         <button
            //                             onClick={this.handleUpload}
            //                         >
            //                             Add Photos
            //                         </button>
            //                         {/* <label htmlFor='full_name'>Name</label>
            //                         <input type='text' name='full_name' id='full_name' required/>
            //                         <label htmlFor='about_me'>About me</label>
            //                         <textarea id='about_me' name='about_me'
            //                                     rows='5' cols='33'>
            //                         </textarea>
            //                         <label>Breed</label>
            //                         <select name='breed' id='breed' required>
            //                         <option value='Poodle (Toy)' selected>Poodle (Toy)</option>
            //                         </select>
            //                         <label>Size</label>
            //                         <select name='size' id='size' required>
            //                         <option value='Small' selected>Small</option>
            //                         </select>
            //                         <label htmlFor='age'>Age</label>
            //                         <input type='text' name='age' id='age'/>
            //                         <div className='gender-box'>
            //                             <label>Gender</label>
            //                             <input type='radio' id='female' name='gender' value='female'
            //                             checked />
            //                             <label htmlFor='female'>Female</label>
            //                             <input type='radio' id='male' name='gender' value='male' />
            //                             <label htmlFor='male'>Male</label>
            //                         </div>
                                    
            //                         <button type='submit' className='btn'>Save</button>           */}
            //                     </div>                           
            //                 </fieldset>         
            //             </form>
            //         </div>
            //     </main>
            //     <Footer />
            // </div>
            <div className="container">
				{/* For Alert box*/}
				<div id="oc-alert-container"></div>
				{/* Single File Upload*/}
				<div className="card border-light mb-3 mt-5" style={{ boxShadow: '0 5px 10px 2px rgba(195,192,192,.5)' }}>
					<div className="card-header">
						<h3 style={{ color: '#555', marginLeft: '12px' }}>Single Image Upload</h3>
						<p className="text-muted" style={{ marginLeft: '12px' }}>Upload Size: 250px x 250px ( Max 2MB )</p>
					</div>
					<div className="card-body">
						<p className="card-text">Please upload an image for your profile</p>
						<input type="file" onChange={this.singleFileChangedHandler}/>
						<div className="mt-5">
							<button className="btn btn-info" onClick={this.handleUpload}>Upload!</button>
						</div>
					</div>
				</div>
            </div>
        );
    }
}
 
export default ProfileSetup;