import React, { Component } from 'react';

// export default React.createContext({
//     user: {},
//     dogs: [],
//     events:[],
//     getUserData: () => {},
//     setSelectedDog: () => {},
// })

const DogsContext = React.createContext({
    user: {},
    dogs: [],
    myDogs: [],
    events:[],
    selectedDog: [],
    selectedEvent: undefined,
    getUserData: () => {},
    setSelectedDog: () => {},
    setSelectedEvent: () => {},
})

export default DogsContext;

export class DogsProvider extends Component {
    state = {
        dogs: [],
        events: [],
        myDogs: [],
        selectedEvent: [],
        selectedDog: [],

    }

    setDogs = dogs => {
        (Array.isArray(dogs))
        ? this.setState({ dogs })
        : console.log('not an array');
    }

    setSelectedDog = dog => {
        this.setState({ selectedDog: dog });
    }

    clearSelectedDog = () => {
        this.setState({ selectedDog: undefined });
    }

    setEvents = events => {
        (Array.isArray(events))
        ? this.setState({ events })
        : console.log('not an array');
    }

    setSelectedEvent = event => {
        this.setState({ selectedEvent: event });
    }

    clearSelectedEvent = () => {
        this.setState({ selectedEvent: undefined });
    }

    render() {
        const contextValue = {
            dogs: this.state.dogs,
            myDogs: this.state.myDogs,
            selectedDog: this.state.selectedDog,
            setSelectedDog: this.setSelectedDog,
            clearSelectedDog: this.clearSelectedDog,
            setDogs: this.setDogs,
            events: this.state.events,
            selectedEvent: this.state.selectedEvent,
            setSelectedEvent: this.setSelectedEvent,
            clearSelectedEvent: this.clearSelectedEvent,
            setEvents: this.setEvents,
        }

        return (
            <DogsContext.Provider value={contextValue}>
                {this.props.children}
            </DogsContext.Provider>
        );
    }
}
