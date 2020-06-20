import { combineReducers } from 'redux';
import { appReducer } from './appReducer';

const combinedReducers = combineReducers({
  app: appReducer,
});

export default (state, action) => {
  return combinedReducers(state, action);
};
