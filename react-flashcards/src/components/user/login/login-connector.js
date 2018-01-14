import React, { Component } from 'react';
import { inputUserEmail } from '../../../store/ducks/user/actions'
import { createSelector } from 'reselect'

const getTest = () => 'test'
const getUser = data => data.user

export const mapDispatchToProps = dispatch => (
  {
    inputUserEmail: () => { dispatch(inputUserEmail()) }
  }
)

export const mapStateToProps = (state, props) => (
  {
    user: getUser(state)
  }
)
