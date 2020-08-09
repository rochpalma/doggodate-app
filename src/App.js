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
import MyEvents from './components/MyEvents/MyEvents';
import PrivateRoute from './Utils/PrivateRoute'
import PublicOnlyRoute from './Utils/PublicOnlyRoute'

export default class App extends Component {
  render(){
    return (
      <DogsProvider>
        <div className='App'>
          <PublicOnlyRoute exact path = '/' component={LandingPage}/>
          <PublicOnlyRoute exact path = '/signin' component={Signin}/>
          <PublicOnlyRoute exact path = '/signup' component={Signup}/>
          <PrivateRoute exact path = '/setup' component={ProfileSetup}/>
          <PrivateRoute exact path = '/myprofile' component={ProfilePage}/>
          <PrivateRoute exact path = '/feed' component={Feed}/>
          <PublicOnlyRoute exact path = '/logout' component={LandingPage}/>
          <PrivateRoute exact path = '/dogs/:id' component={SelectedProfile}/>
          <PrivateRoute exact path = '/meetup' component={Meetup}/>
          <PrivateRoute exact path = '/myevents' component={MyEvents}/>
        </div>
      </DogsProvider>
    );
  }
}
