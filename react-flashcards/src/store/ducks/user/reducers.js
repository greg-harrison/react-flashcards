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
      if (action.result) {
        console.log('action.result', action.result);
        return Object.assign({}, state, {
          user: {
            name: action.result.text
          }
        })
      }
    }

    case types.INPUT_USER_EMAIL: {
      if (action.result) {
        return Object.assign({}, state, {
          user: {
            email: action.result.text
          }
        })
      }
    }

    default: return state
  }
}

export default recordListReducer
