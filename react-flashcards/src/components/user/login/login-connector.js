import React, { Component } from 'react';
import {
  inputUserEmail,
  inputUserPassword
} from '../../../store/ducks/user/actions'
import { createSelector } from 'reselect'

const getUser = data => data.user
const getEmail = data => data.user.email

export const mapDispatchToProps = (dispatch, state) => (
  {
    inputUserEmail: (value) => (
      dispatch(inputUserEmail(value))
    ),
    inputUserPassword: (value) => (
      dispatch(inputUserPassword(value))
    )
  }
)

export const mapStateToProps = (state, props) => (
  {
    user: getUser(state),
    email: getEmail(state)
  }
)
