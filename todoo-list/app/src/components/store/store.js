import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import reducerTask from '../reducers/reducerTask.js';
import reducerText from '../reducers/reducerText.js';

let reducer = combineReducers({ reducerTask, reducerText});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
