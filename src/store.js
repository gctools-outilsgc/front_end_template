import { createStore } from 'redux';

const LOGIN_ACTION = 'LOGIN';
const LOGOUT_ACTION = 'LOGOUT';
const ERROR = 'ERROR';
const CLEAR_ERROR = 'CLEAR_ERROR';

const initialState = {
  showError: false,
  user: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ACTION:
      return Object.assign({}, { user: action.user });
    case LOGOUT_ACTION:
      return Object.assign({}, { user: false });
    case ERROR:
      return Object.assign({}, state, { showError: action.error });
    case CLEAR_ERROR:
      return Object.assign({}, state, { showError: false });
    default:
      return state;
  }
}

const store = createStore(reducer);

export const loginAction = user => ({ type: LOGIN_ACTION, user });
export const logoutAction = () => ({ type: LOGOUT_ACTION });

export const errorAction = error => ({ type: ERROR, error });
export const clearErrorAction = () => ({ type: CLEAR_ERROR });

export default store;
