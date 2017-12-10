import types from './types';

/* State Shape
{
  user: {
    id: '',
    name: '',
    email: '',
    password: ''
  }
}
*/

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
      // return { ...state, user: action.payload.data.data.user }
    }

    case types.CREATE_USER: {
      // return state.user = state.user.push(action.payload.draft)
    }

    default: return state
  }
}

export default recordListReducer
