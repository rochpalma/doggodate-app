import React, { Component } from 'react';

// export default React.createContext({
//     user: {},
//     dogs: [],
//     events:[],
//     getUserData: () => {},
//     setSelectedDog: () => {},
// })

const DogsContext = React.createContext({
    dogProfile: undefined,
    user: {},
    dogs: [],
    myDogs: [],
    events:[],
    selectedDog: [],
    selectedEvent: undefined,
    getUserData: () => {},
    setSelectedDog: () => {},
    setSelectedEvent: () => {},
    setMyDogs: () => {},
    setDogProfile: () => {},
    clearDogProfile: () => {},
    setComments: () => {},
    addComment: () => {},
})

export default DogsContext;

export class DogsProvider extends Component {
    state = {
        dogProfile: [],
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

    setMyDogs = dogs => {
        this.setState({ myDogs: dogs });
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

    getUserData = user => {
        this.setState( {user} )

    }

    setDogProfile = dogProfile => {
        this.setState({ dogProfile })
    }

    setComments = comments => {
        this.setState({ comments })
      }
    
    clearDogProfile = () => {
        this.setDogProfile({ dogProfile: undefined })
        this.setComments([])
    }
    
    addComment = comment => {
        this.setComments([
            ...this.state.comments,
            comment
        ])
    }

    render() {
        const contextValue = {
            dogs: this.state.dogs,
            myDogs: this.state.myDogs,
            selectedDog: this.state.selectedDog,
            setSelectedDog: this.setSelectedDog,
            clearSelectedDog: this.clearSelectedDog,
            setDogProfile: this.setDogProfile,
            setComments: this.setComments,
            clearDogProfile: this.clearDogProfile,
            addComment: this.addComment,
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
