import types from "./types";

// We'll use ReduxForm to avoid having any of the actions that are trying to manage the form inputs directly

export const fetchUser = (data) => ({
  type: types.FETCH_USER,
  payload: {
    data
  }
});

export const loginUser = (data) => ({
  type: types.LOGIN_USER,
  payload: {
    data
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
