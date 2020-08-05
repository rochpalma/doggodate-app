import React, { Component } from 'react';
import Context from '../../Context';
import DoggodateApiService from '../../services/doggodate-api-service';
import ProfileNav from '../ProfileNav/ProfileNav';

class MyEvents extends Component {
    static contextType = Context;

    componentDidMount() {
        DoggodateApiService.getMyEvents()
            .then(events => {
                this.context.setMyEvents(events);
            })
            .catch(this.context.setError);
    }

    render() {
        const myEvents = this.context.myEvents.map((event, index) => {
            return (
                <li>
                    <section>
                        <h2>Meetup with {event.recipient}</h2>
                        <h3>{event.event_name}</h3>
                        <p>{event.description}</p>
                        <p>{event.location}</p>
                        <p>{event.start_time} - {event.end_time}</p>
                    </section> 
                </li>
            )
        }); 
        return (  
            <div>
                <ProfileNav />
                <h1>Events</h1>
                <ul>
                    {myEvents}
                </ul>
              
            </div>
        );
    }
}
 
export default MyEvents;

