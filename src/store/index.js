import { createStore } from 'redux';

const authReducer = (state = { isAuth: false }, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuth: true };
    case 'LOGOUT':
      return { ...state, isAuth: false };
    default:
      return state;
  }
};

const store = createStore(authReducer);

export default store;
