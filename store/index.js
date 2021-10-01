import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/rootReducer';

const enhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleware),
);

const initsStore = initialState => createStore(rootReducer, initialState, enhancer);

export default initsStore;