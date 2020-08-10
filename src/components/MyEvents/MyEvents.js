import React, { Component } from 'react';
import Context from '../../Context';
import DoggodateApiService from '../../services/doggodate-api-service';
import ProfileNav from '../ProfileNav/ProfileNav';
import TokenService from '../../services/token-service';

class MyEvents extends Component {
    static contextType = Context;

    componentDidMount() {
        DoggodateApiService.getMyEvents(TokenService.getUserId())
            .then(events => {
                this.context.setMyEvents(events);
            })
            .catch(this.context.setError);
    }

    render() {
        const myEvents = this.context.myEvents.map((event, index) => {
            return (
                <li className="panel panel-primary">
                    <section>
                    <div className="panel-heading">
                        <h2 className="panel-title">Meetup with {event.full_name}</h2>
                    </div>
                    <div className="panel-body">
                    <div className="row">                             
                        <div className="col-xs-9">{event.event_name}</div>                   
                    </div>
                    <div className="row">                             
                        <div className="col-xs-9">{event.description}</div>                   
                    </div>
                    <div className="row">                             
                        <div className="col-xs-9">{event.location}</div>                   
                    </div>
                    <div className="row">                             
                        <div className="col-xs-9">{event.start_time} - {event.end_time}</div>                   
                    </div>
                       
                    </div>
                    </section> 
                </li>
            )
        }); 
        return (  
            <div className='PagWrapper'>
                <ProfileNav />
                <div className='MainContent'>
                <h1 className='center'>Events</h1>
                <ul>
                    {myEvents}
                </ul>
                </div>
              
            </div>
        );
    }
}
 
export default MyEvents;

