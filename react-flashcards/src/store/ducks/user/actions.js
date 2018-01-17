import { CALL_API } from 'redux-api-middleware'
import types from "./types";

const API_ROOT = process.env.R_FLASHCARD_API_URL

// We'll use ReduxForm to avoid having any of the actions that are trying to manage the form inputs directly

export const fetchUser = (data) => ({
  type: types.FETCH_USER,
  payload: {
    data
  }
});

export const loginUser = (data) => ({
  [CALL_API]: {
    endpoint: API_ROOT + "/user/login",
    method: 'POST',
    types: [
      types.LOGIN_USER,
      //{
      //  type: types.LOGIN_USER,
      //  payload: { data: data }
      //},
      {
        type: types.LOGIN_USER_SUCCESS,
        payload: (action, state, res) => {
          console.log('res', res);

          const contentType = res.headers.get('Content-Type');
          if (contentType && ~contentType.indexOf('json')) {
            // Just making sure res.json() does not raise an error
            return res.json()
          }
        }
      },
      types.LOGIN_USER_FAIL
    ]
  }
});

export const createUser = (text) => ({
  type: types.CREATE_USER,
  payload: {
    text
  }
});

export const inputUserName = (text) => ({
  type: types.INPUT_USER_NAME,
  text
});

export const inputUserEmail = (text) => ({
  type: types.INPUT_USER_EMAIL,
  text
});

export const inputUserPassword = (text) => ({
  type: types.INPUT_USER_PASSWORD,
  text
});
