import React, { Component } from 'react';
import { createSelector } from 'reselect'

const getTest = () => 'test'

export const mapDispatchToProps = (dispatch, props) => (
  {}
)

export const mapStateToProps = (state, props) => (
  {
    test: getTest(state)
  }
)
