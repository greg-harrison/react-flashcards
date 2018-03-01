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
    // case types.FETCH_USER: {
    //   // This will pull the user from the database

    //   // return { ...state, user: action.payload.data.data.user }
    // }

    // case types.CREATE_USER: {
    //   // Use Name, Email and Password to create a user in the backend

    //   // return state.user = state.user.push(action.payload.draft)
    // }

    case types.INPUT_USER_NAME: {
      return Object.assign({}, state, {
        name: action.text
      })
    }

    case types.INPUT_USER_EMAIL: {
      let exp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

      if (action.text.match(exp)) {
        return Object.assign({}, state, {
          email: action.text
        })
      } else {
        return Object.assign({}, state, {
          email: ''
        })
      }
    }

    case types.INPUT_USER_PASSWORD: {
      let exp = new RegExp(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/g)

      // asjdklAJK23@32@
      // Must have 1 Uppercase, 1 lowercase, 1 symbol, 1 number

      if (action.text.match(exp)) {
        return Object.assign({}, state, {
          password: ''
        })
      } else {
        return Object.assign({}, state, {
          password: action.text
        })
      }
    }

    case types.LOGIN_USER: {
      console.log('action', action);
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
