import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Render, Route } from 'react-router-dom'

import './style/App.css'

import Header from './components/base_components/header'
import Landing from './components/landing'
import Login from './components/user/login'
import Signup from './components/user/signup'
import Stack from './components/stack'

const App = () => (
  <Router>
    <div className="app-wrapper">
      <Header isLoggedIn={true} />

      <Route exact={true} path='/' component={Landing} />
      <Route path='/stack/:stackId' component={Stack} />

      <Route exact={true} path='/login' component={Login} />
      <Route exact={true} path='/signup' component={Signup} />
    </div>
  </Router>
);

export default App
