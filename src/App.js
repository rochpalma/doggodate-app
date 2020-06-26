import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import ProfileSetup from './components/ProfileSetup/ProfileSetup';
import ProfilePage from './components/ProfilePage/ProfilePage';
import Feed from './components/Feed/Feed';
import SelectedProfile from './components/SelectedProfile/SelectedProfile';
import Meetup from './components/Meetup/Meetup';
import  './App.css';


function App() {
  return (
    <div className='App'>
      <Route exact path = '/' component={LandingPage}/>
      <Route exact path = '/signin' component={Signin}/>
      <Route exact path = '/signup' component={Signup}/>
      <Route exact path = '/setup' component={ProfileSetup}/>
      <Route exact path = '/myprofile' component={ProfilePage}/>
      <Route exact path = '/feed' component={Feed}/>
      <Route exact path = '/logout' component={LandingPage}/>
      <Route exact path = '/dog-1' component={SelectedProfile}/>
      <Route exact path = '/meetup' component={Meetup}/>
    </div>
  );
}

export default App;