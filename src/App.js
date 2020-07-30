import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import ProfileSetup from './components/ProfileSetup/ProfileSetup';
import ProfilePage from './components/ProfilePage/ProfilePage';
import Feed from './components/Feed/Feed';
import SelectedProfile from './components/SelectedProfile/SelectedProfile';
import Meetup from './components/Meetup/Meetup';
import Context from "./Context";
import  './App.css';
import TokenService from './services/token-service';
import DoggodateApiService from './services/doggodate-api-service';
import { DogsProvider } from './Context';

export default class App extends Component {
  // static contextType = Context;

  // state = {
  //   user: {},
  //   dogs: []
  // }


  //try
  // componentDidMount() {
  //   if (TokenService.getAuthToken()) {
  //     DoggodateApiService.getUser().then((res) => {
  //       this.getUserData(res);
  //     });
  //   }
  // }

  // getUserData = (user) => {
  //   this.setUser(user);
  // };

  render(){
    return (
      <DogsProvider>
        <div className='App'>
          <Route exact path = '/' component={LandingPage}/>
          <Route exact path = '/signin' component={Signin}/>
          <Route exact path = '/signup' component={Signup}/>
          <Route exact path = '/setup' component={ProfileSetup}/>
          <Route exact path = '/myprofile' component={ProfilePage}/>
          <Route exact path = '/feed' component={Feed}/>
          <Route exact path = '/logout' component={LandingPage}/>
          <Route exact path = '/dogs/:id' component={SelectedProfile}/>
          <Route exact path = '/meetup' component={Meetup}/>
        </div>
      </DogsProvider>
    );
  }
}
