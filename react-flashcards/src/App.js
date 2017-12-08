import React, { Component } from 'react';
import Header from './components/base_components/header'

class App extends Component {
  componentDidMount() {
    console.log('mounted');
    // Set the initial data from Redux here
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
