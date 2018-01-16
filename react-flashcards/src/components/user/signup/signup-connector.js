import React, { Component } from 'react';
import {
  inputUserEmail,
  inputUserName,
  inputUserPassword
} from '../../../store/ducks/user/actions'

export const mapDispatchToProps = (dispatch, state) => (
  {
    inputUserName: (value) => (
      dispatch(inputUserName(value))
    ),
    inputUserEmail: (value) => (
      dispatch(inputUserEmail(value))
    ),
    inputUserPassword: (value) => (
      dispatch(inputUserPassword(value))
    )
  }
)

export const mapStateToProps = (state, props) => ({})
