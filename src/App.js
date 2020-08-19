import React, { Component } from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import ProfileSetup from './components/ProfileSetup/ProfileSetup';
import ProfilePage from './components/ProfilePage/ProfilePage';
import Feed from './components/Feed/Feed';
import SelectedProfile from './components/SelectedProfile/SelectedProfile';
import Meetup from './components/Meetup/Meetup';
import MyEvents from './components/MyEvents/MyEvents';
import MyProfile from './components/MyProfile/MyProfile';
import PrivateRoute from './Utils/PrivateRoute'
import PublicOnlyRoute from './Utils/PublicOnlyRoute'
import PersonUpdate from './components/PersonUpdate/PersonUpdate';
import LoginUpdate from './components/LoginUpdate/LoginUpdate';
import PhoneUpdate from './components/PhoneUpdate/PhoneUpdate';
import MyDogProfileUpdate from './components/MyDogProfileUpdate/MyDogProfileUpdate';
import DogInfoUpdate from './components/DogInfoUpdate/DogInfoUpdate';
import { DogsProvider } from './Context';
import  './App.css';

export default class App extends Component {
  render(){
    return (
      <DogsProvider>
        <div className='App'>
          <PublicOnlyRoute exact path = '/' component={LandingPage}/>
          <PublicOnlyRoute exact path = '/signin' component={Signin}/>
          <PublicOnlyRoute exact path = '/signup' component={Signup}/>
          <PublicOnlyRoute exact path = '/setup' component={ProfileSetup}/>
          <PrivateRoute exact path = '/mydogprofile' component={ProfilePage}/>
          <PrivateRoute exact path = '/feed' component={Feed}/>
          <PublicOnlyRoute exact path = '/logout' component={LandingPage}/>
          <PrivateRoute exact path = '/dogs/:id' component={SelectedProfile}/>
          <PrivateRoute exact path = '/meetup' component={Meetup}/>
          <PrivateRoute exact path = '/myevents' component={MyEvents}/>
          <PrivateRoute exact path = '/myprofile' component={MyProfile}/>
          <PrivateRoute exact path = '/personupdate' component={PersonUpdate}/>
          <PrivateRoute exact path = '/loginupdate' component={LoginUpdate}/>
          <PrivateRoute exact path = '/phoneupdate' component={PhoneUpdate}/>
          <PrivateRoute exact path = '/mydogprofileupdate' component={MyDogProfileUpdate}/>
          <PrivateRoute exact path = '/doginfoupdate' component={DogInfoUpdate}/>
        </div>
      </DogsProvider>
    );
  }
}
