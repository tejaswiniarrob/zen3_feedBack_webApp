import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import { loadingBarReducer } from 'react-redux-loading-bar'
import notificationOperations from "./NotificationReducers"
import {createPostReducer} from "./createPostReducer"
import {createCommentReducer} from "./createCommentReducer"
import {getCommentReducer} from "./getCommentReducer"
import {developmentUsersReducer} from "./developmentUsersReducer"


export default combineReducers({

  notificationOperations: notificationOperations,
  createPostOperations: createPostReducer,
  createCommenttOperations: createCommentReducer,
  getCommentOperations: getCommentReducer,
  developmentUsersOperations: developmentUsersReducer

})
