import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import { loadingBarReducer } from 'react-redux-loading-bar'
import notificationOperations from "./NotificationReducers"
import createPostOperations from "./createPostReducer"
import createCommenttOperations from "./createCommentReducer"
import getCommentOperations from "./getCommentReducer"
import developmentUsersOperations from "./developmentUsersReducer"


export default combineReducers({

  notificationOperations: notificationOperations,
  createPostOperations: createPostOperations,
  createCommenttOperations: createCommenttOperations,
  getCommentOperations: getCommentOperations,
  developmentUsersReducer: developmentUsersReducer

})
