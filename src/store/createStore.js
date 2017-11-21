import { applyMiddleware, compose, createStore as createReduxStore } from 'redux'
//import createSagaMiddleware from 'redux-saga'
import makeRootReducer from './reducer'
//import rootSaga from './saga'
import createEnhancers from './enhancers'

//const sagaMiddleware = createSagaMiddleware()

const createStore = (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [
    //sagaMiddleware,
  ]

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = createEnhancers()

  let composeEnhancers = compose

  if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === `function`) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createReduxStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )
  store.asyncReducers = {}

  //sagaMiddleware.run(rootSaga)

  return store
}

export default createStore
