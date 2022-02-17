import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/root_reducer'
let configureStore
if (process.env.NODE_ENV === 'production') {
  configureStore = (preloadedState = {}) =>
    createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger))
} else {
  configureStore = (preloadedState = {}) =>
    createStore(rootReducer, preloadedState, applyMiddleware(thunk))
}

export default configureStore
