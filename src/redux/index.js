import { combineReducers } from 'redux';
import { appReducer } from './reducers/reducer';

const combinedReducers = combineReducers({
  app: appReducer,
});

export default (state, action) => {
  return combinedReducers(state, action);
};
