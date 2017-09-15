import React, { Component } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import { Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        
      <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/home' component={Home} />
          <Route path='/profile' component={Profile} />
      
      </Switch>
      </div>
    );
  }
}

export default App;
