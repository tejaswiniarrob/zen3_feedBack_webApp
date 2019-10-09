import * as types from "../../Constants/developmentUsersConstants"
import {
  showNotification
} from "../NotificationActions"
import { REACT_APP_FEEDBACK_API} from "../../../config"
import axios from 'axios'


export const DevelopmentUsersRequest = () => ({
  type: types.DEVELOPMENT_USERS_REQUEST
})

export const DevelopmentUsersSuccess = (data) => ({
  type: types.DEVELOPMENT_USERS_SUCCESS,
  data
})

export const DevelopmentUsersFail = error => ({
  type: types.DEVELOPMENT_USERS_FAIL,
  error
})

export const developmentUsers = (developmentData) => {


  return async dispatch => {
    dispatch(DevelopmentUsersRequest())
    try {



        let {data} = await axios.get(`${REACT_APP_FEEDBACK_API}/v1/zen3/api/users/developmentusers/read`)

        dispatch(DevelopmentUsersSuccess( data.data))
        dispatch(showNotification('success',data.data.message))



    } catch (e) {
      console.log(e);
      if (e.response){
        dispatch(DevelopmentUsersFail( e.response))
        dispatch(showNotification('error', e.response.data.message))
     }else{
       dispatch(DevelopmentUsersFail( e))
       dispatch(showNotification('error', e.response.data.message))
     }
    }
  }
}
