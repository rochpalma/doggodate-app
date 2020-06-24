import React, { Component } from 'react';
import ProfileNav from '../ProfileNav/ProfileNav';
import Footer from '../Footer/Footer';

class Feed extends Component {
    render() { 
        return (  
            <div>
                <ProfileNav />
                <main>
                <form>
                    <fieldset>
                    <legend>Create an event</legend>
                    <div class ="input-container">
                        <label for="event-name">Event Name</label>
                        <input type="text" name="event-name" id="event-name" required/>
                        <label for="description">Description</label>
                        <input type="text" name="description" id="description" required/>
                        <label for="start-time">Start Time</label>
                        <input type="text" name="start-time" id="start-time" required/>
                        <label for="end-time">End Time</label>
                        <input type="text" name="end-time" id="end-time" required/>
                        <label for="location">Location</label>
                        <input type="text" name="location" id="location" required/>
                        
                        <input type="submit" value="Create" id="submit"/> 
                    </div>                           
                    </fieldset>         
                </form>
                </main>
                <Footer />
            </div>
        );
    }
}
 
export default Feed;