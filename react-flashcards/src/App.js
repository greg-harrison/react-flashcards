import React, { Component } from 'react';
import './style/App.css'
import Header from './components/base_components/header'
import Landing from './components/landing'
import Login from './components/user/login'
import Signup from './components/user/signup'
import Stack from './components/stack'
import { BrowserRouter as Router, Link, Render, Route } from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    console.log('mounted');
    // Set the initial data from Redux here
    // At some point we need to check the MatchPath to set 'active' on the header items
    console.log('this.props', this.props);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact={true} path='/' component={Landing} />
          <Route path='/stack/:stackId' component={Stack} />
          <Route exact={true} path='/login' component={Login} />
          <Route exact={true} path='/signup' component={Signup} />
        </div>
      </Router>
    );
  }
}

export default App;
