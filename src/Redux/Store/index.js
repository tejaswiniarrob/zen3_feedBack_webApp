import { createStore, applyMiddleware, compose } from "redux"
import { routerMiddleware } from "react-router-redux"
import thunk from "redux-thunk"
import appReducer from "../Reducers"
const createHistory = require("history").createBrowserHistory
export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [thunk, routerMiddleware(history)]
// const createHistory =require("history").createHashHistory

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension())
  }
}

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = initialState
  }else{
    return appReducer(state, action)
  }
}
const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
