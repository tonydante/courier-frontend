import React, { Component } from 'react';
import { Router, Route} from 'react-router-dom';
import createHashHistory from 'history/createHashHistory'
import CheckLoggedInUser from './utils/checkLoggedInUser'
import {PrivateRoute} from './utils/PrivateRoute'
import Signup from './components/Signup';
import Signin from './components/Signin';
import './App.css';
import Home from './components/Home'
import Dashboard from './components/Dashboard';
import BookParcel from './components/BookParcel';
import ViewParcel from './components/ViewParcel';
const hashHistory = createHashHistory({ basename: process.env.PUBLIC_URL });
class App extends Component {
  
  
  render() {
    console.log(process.env.PUBLIC_URL)
    return (
        <Router history={hashHistory}>
        <div className="app">
          <PrivateRoute exact path="/parcel/:id" component={ViewParcel} />
          <PrivateRoute exact path="/parcel" component={BookParcel} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={CheckLoggedInUser(Home)} />
          <Route exact path="/signin" component={CheckLoggedInUser(Signin)} />
          <Route exact path="/signup" component={CheckLoggedInUser(Signup)} />
        </div>
      </Router>
     
    );
  }
}

export default App;
