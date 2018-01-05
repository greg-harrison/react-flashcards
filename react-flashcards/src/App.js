import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Render, Route } from 'react-router-dom'

import './style/App.css'

import Landing from './components/landing'
import Login from './components/user/login'
import Signup from './components/user/signup'
import Stack from './components/stack'

import ProtectedRoute from './components/route_components/protectedRoute'

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const App = () => (
  <Router>
    <div className="app-wrapper">
      <Route exact={true} path='/login' component={Login} />
      <Route exact={true} path='/signup' component={Signup} />

      <ProtectedRoute auth={fakeAuth} path='/' component={Landing} />
      <ProtectedRoute auth={fakeAuth} path='/stack/:stackId' component={Stack} />
    </div>
  </Router>
);

export default App
