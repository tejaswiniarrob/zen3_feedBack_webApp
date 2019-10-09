import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import { loadingBarReducer } from 'react-redux-loading-bar'
import notificationOperations from "./NotificationReducers"



export default combineReducers({

  notificationOperations: notificationOperations,

})
