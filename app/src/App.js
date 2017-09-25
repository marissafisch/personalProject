import React, { Component } from 'react';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Features from './components/Features/Features';
import Create_Event from './components/Create_Event/Create_Event';
import View_Edit_Event from './components/View_Edit_Event/View_Edit_Event';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <div>
        <Header /> 
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/profile' component={Profile} />
          <Route path='/features' component={Features} />
          <Route path='/create_event' component={Create_Event} />
          <Route path='/view_editevent' component={View_Edit_Event} />
        </Switch>
      </div>
    );
  }
}

export default App;
