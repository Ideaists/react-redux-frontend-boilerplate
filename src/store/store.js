import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import sampleReducer from '../reducers/sampleReducer';

const store = createStore(
  combineReducers({
    sample: sampleReducer
  }),
  applyMiddleware(
    thunk
  )
);

export default store;