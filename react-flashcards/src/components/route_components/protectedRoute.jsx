import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      rest.auth.isAuthenticated === true
        ? <Component {...rest} />
        : <Redirect to='/login' />
    )} />
  )
}

export default PrivateRoute
