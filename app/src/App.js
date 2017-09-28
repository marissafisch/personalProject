import React, { Component } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Features from './components/Features/Features';
import Create_Event from './components/Create_Event/Create_Event';
import Review_Event from './components/Review_Event/Review_Event';
import Send_Invite from './components/Send_Invite/Send_Invite';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';


class App extends Component {
  

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/profile' component={Profile} />
          <Route path='/features' component={Features} />
          <Route path='/create_event' component={Create_Event} />
          <Route path='/review_event' component={Review_Event} />
          <Route path='/send_invite' component={Send_Invite} />
        </Switch>

      </div>
    );
  }
}

export default App;
