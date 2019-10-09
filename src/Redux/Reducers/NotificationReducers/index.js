import * as types from "../../Constants/NotificationConstants"

const initialState = {
  notify: false,
  level: "",
  message: ""
}

export default function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case types.SHOW_NOTIFICATION:
      return Object.assign({}, state, {
        notify: true,
        level: action.level,
        message: action.message
      })
    case types.HIDE_NOTIFICATION:
      return Object.assign({}, state, {
        notify: false,
        level: "",
        message: ""
      })
    default:
      return state
  }
}
