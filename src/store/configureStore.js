import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import authReducer from './reducers/authReducer'
import uiReducer from './reducers/uiReducer'

const rootReducer = combineReducers({
  authentication: authReducer,
  ui: uiReducer
})

let composeEnhancers = compose

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
}

export default configureStore