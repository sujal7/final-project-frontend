import { createStore } from 'redux';

const authReducer = (state = { isAuth: false, favorites: [] }, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuth: true };

    case 'LOGOUT':
      return { ...state, isAuth: false };

    case 'ADD_FAVORITE':
      return { ...state, favorites: [...state.favorites, action.payload] };

    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(
          (item) => item._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
};

const store = createStore(authReducer);

export default store;
