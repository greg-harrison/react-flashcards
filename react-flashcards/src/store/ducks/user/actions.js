import types from "./types";

export const fetchUser = (data) => ({
  type: types.FETCH_USER,
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
