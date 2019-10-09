import * as types from "../../Constants/NotificationConstants"

export const showNotification = (level, message) => {
  return({
  type: types.SHOW_NOTIFICATION,
  level,
  message
})}

export const hideNotification = () => ({
  type: types.HIDE_NOTIFICATION
})
