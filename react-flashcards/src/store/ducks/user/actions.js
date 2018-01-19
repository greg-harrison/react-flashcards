import { RSAA } from 'redux-api-middleware'
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
  [RSAA]: {
    types: [types.LOGIN_USER, types.LOGIN_USER_SUCCESS, types.LOGIN_USER_FAIL],
    endpoint: 'http://localhost:8081/user/login',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
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
