import React, { Component } from 'react';
import { inputUserEmail } from '../../../store/ducks/user/actions'
import { createSelector } from 'reselect'

const getUser = data => data.user
const getEmail = data => data.user.email

export const mapDispatchToProps = (dispatch, state) => (
  {
    inputUserEmail: (value) => { dispatch(inputUserEmail(value)) }
  }
)

export const mapStateToProps = (state, props) => (
  {
    user: getUser(state)
  }
)
