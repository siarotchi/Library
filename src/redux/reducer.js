import { CHANGE_UP_THEME } from '../actions/appActions';

function changeAppTheme(state, action) {
  return {
    ...state,
    appTheme: state.appTheme === 'white' ? 'grey' : 'white',
  };
}

export const appReducer = (state = { appTheme: 'white' }, action) => {
  switch (action.type) {
    case CHANGE_UP_THEME:
      return changeAppTheme(state, action);
    default:
      return state;
  }
};
