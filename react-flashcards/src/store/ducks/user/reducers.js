import types from './types';

const initialState = {
  user: {
    id: '',
    name: '',
    email: '',
    password: ''
  }
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
      // Updating the typing of a user name

    }

    case types.INPUT_USER_EMAIL: {
      // Updating the user email during input - run validations and so on
    }

    default: return state
  }
}

export default recordListReducer
