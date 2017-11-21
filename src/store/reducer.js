import { combineReducers } from 'redux'
/*
import {
  reducer as auth,
  AUTH,
} from 'services/auth'
*/
/*
import {
  reducer as stream,
} from 'domains/stream'
*/

export const makeRootReducer = asyncReducers => combineReducers({
  //[AUTH]: auth,
  /*
  domains: {
    stream,
  },
  */
  ...asyncReducers
})

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
