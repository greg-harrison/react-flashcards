import types from './types';

const initialState = {
  id: '',
  name: '',
  pass: '',
  passError: false,
  email: '',
  isRegistered: false,
};

const recordListReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USER: {
      // This will pull the user from the database

      // return { ...state, user: action.payload.data.data.user }
    }

    case types.CREATE_USER: {
      // Use Name, Email and Password to create a user in the backend

      // return state.user = state.user.push(action.payload.draft)
    }

    case types.INPUT_USER_NAME: {
      return Object.assign({}, state, {
        name: action.text
      })
    }

    case types.INPUT_USER_EMAIL: {
      return Object.assign({}, state, {
        email: action.text
      })
    }

    case types.INPUT_USER_PASSWORD: {
      return Object.assign({}, state, {
        password: action.text
      })
    }

    case types.LOGIN_USER: {
      if (action.result) {
        return Object.assign({}, state, {
          user: {
            isRegistered: true
          }
        })
      }
    }

    default: return state
  }
}

export default recordListReducer
