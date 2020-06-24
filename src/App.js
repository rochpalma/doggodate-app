import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import ProfileSetup from './components/ProfileSetup/ProfileSetup';
import ProfilePage from './components/ProfilePage/ProfilePage';
import Feed from './components/Feed/Feed';
import logo from './DogTinder.png';
import  './App.css';


function App() {
  return (
    <div className='App'>
      <header>
       <img src={logo} alt='dog tinder logo'/>
      </header>
      <Route exact path = '/' component={LandingPage}/>
      <Route exact path = '/signin' component={Signin}/>
      <Route exact path = '/signup' component={Signup}/>
      <Route exact path = '/setup' component={ProfileSetup}/>
      <Route exact path = '/myprofile' component={ProfilePage}/>
      <Route exact path = '/feed' component={Feed}/>
    </div>
  );
}

export default App;