import React, { Component } from 'react';
import Header from './components/base_components/header'
import Landing from './components/landing'
import Stack from './components/stack'
import { BrowserRouter as Router, Link, Render, Route } from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    console.log('mounted');
    // Set the initial data from Redux here
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact={true} path='/' component={Landing} />
          <Route path='/stack/:stackId' component={Stack} />
        </div>
      </Router>
    );
  }
}

export default App;
