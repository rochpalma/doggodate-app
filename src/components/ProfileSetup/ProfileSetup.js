import React, { Component } from 'react';
import Context from "../../Context";
import ProfileNav from '../ProfileNav/ProfileNav';
import Footer from '../Footer/Footer';
import './ProfileSetup.css';
import DoggodateApiService from '../../services/doggodate-api-service';
import TokenService from '../../services/token-service';
import axios from 'axios';

class ProfileSetup extends Component {
    static contextType = Context;

    state = {
        error: null,
        success : false,
        url : ""
    }

    handleUpload = event => {
        let file = this.uploadInput.files[0];
        // Split the filename to get the name and type
        let fileParts = this.uploadInput.files[0].name.split('.');
        let fileName = fileParts[0];
        let fileType = fileParts[1];
        console.log("Preparing the upload");
        axios.post("http://localhost:8000/sign_s3",{
            fileName : fileName,
            fileType : fileType
        })
        .then(response => {
            var returnData = response.data.data.returnData;
            var signedRequest = returnData.signedRequest;
            var url = returnData.url;
            this.setState({url: url})
            console.log("Received a signed request " + signedRequest);
            
            // Put the fileType in the headers for the upload
            var options = {
                headers: {
                'Content-Type': fileType
                }
            };
            axios.put(signedRequest,file,options)
            .then(result => {
                console.log("Response from s3")
                this.setState({success: true});
            })
            .catch(error => {
                alert("ERROR " + JSON.stringify(error));
            })
        })
        .catch(error => {
        alert(JSON.stringify(error));
        })
    }

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
            picture: this.state.url

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

    renderInvalidMessage = () => {
        return <p>{this.state.error}</p>
    }

    render() { 
        const { error } = this.state;
        return (  
            <div>
                <ProfileNav />
                <main>
                    <div className='userform-container'>
                        <form
                            onSubmit={this.handleSubmit}
                        >
                            {(error) ? this.renderInvalidMessage() : null}
                            <fieldset>
                                <div className='form-fields'>
                                    <legend>Dog's Profile</legend> 
                                    <input onChange={this.handleChange} ref={(ref) => { this.uploadInput = ref; }} type="file"/> 
                                    <button
                                        onClick={this.handleUpload}
                                    >
                                        Add Photos
                                    </button>
                                    <label htmlFor='full_name'>Name</label>
                                    <input type='text' name='full_name' id='full_name' required/>
                                    <label htmlFor='about_me'>About me</label>
                                    <textarea id='about_me' name='about_me'
                                                rows='5' cols='33'>
                                    </textarea>
                                    <label>Breed</label>
                                    <select name='breed' id='breed' required>
                                    <option value='Poodle (Toy)' selected>Poodle (Toy)</option>
                                    </select>
                                    <label>Size</label>
                                    <select name='size' id='size' required>
                                    <option value='Small' selected>Small</option>
                                    </select>
                                    <label htmlFor='age'>Age</label>
                                    <input type='text' name='age' id='age'/>
                                    <div className='gender-box'>
                                        <label>Gender</label>
                                        <input type='radio' id='female' name='gender' value='female'
                                        checked />
                                        <label htmlFor='female'>Female</label>
                                        <input type='radio' id='male' name='gender' value='male' />
                                        <label htmlFor='male'>Male</label>
                                    </div>
                                    {/* <input type='submit' value='Save' id='submit' />  */}
                                    <button type='submit' className='btn'>Save</button>          
                                </div>                           
                            </fieldset>         
                        </form>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}
 
export default ProfileSetup;