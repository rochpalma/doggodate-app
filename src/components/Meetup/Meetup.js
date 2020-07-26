import React, { Component } from 'react';
import Context from '../../Context';
import ProfileNav from '../ProfileNav/ProfileNav';
import Footer from '../Footer/Footer';
import DoggodateApiService from '../../services/doggodate-api-service';
import TokenService from '../../services/token-service';

class Feed extends Component {
    static contextType = Context;

    state = {
        error: null
    }

    handleSubmit = event => {
        event.preventDefault();
        const { event_name, description, created_at, start_time, end_time, location } = event.target;

        this.setState({ error: null });
    
        DoggodateApiService.addEvent({
            user_id: TokenService.getUserId(),
            event_name: event_name.value,
            description: description.value,
            created_at: created_at.value,
            start_time: start_time.value,
            end_time: end_time.value,
            recipient: TokenService.getOwnerId(),
            location: location.value,
        })
        .then(event => {
            //needs to be redirected to list of events
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
                            <legend>Create an event</legend>               
                                <label htmlFor="event_name">Event Name</label>
                                <input type="text" name="event_name" id="event_name" required/>
                                <label htmlFor="description">Description</label>
                                <input type="text" name="description" id="description" required/>
                                <label htmlFor="start-time">Start Time</label>
                                <input type="text" name="start_time" id="start_time" required/>
                                <label htmlFor="end_time">End Time</label>
                                <input type="text" name="end_time" id="end_time" required/>
                                <label htmlFor="location">Location</label>
                                <input type="text" name="location" id="location" required/>         
                                <input type="submit" value="Create" id="submit"/> 
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
 
export default Feed;