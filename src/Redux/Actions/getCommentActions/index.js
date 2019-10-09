import * as types from "../../Constants/getCommentConstants"
import {
  showNotification
} from "../NotificationActions"
import { REACT_APP_FEEDBACK_API} from "../../../config"
import axios from 'axios'


export const GetCommentRequest = () => ({
  type: types.GET_COMMENT_REQUEST
})

export const GetCommentSuccess = (data) => ({
  type: types.GET_COMMENT_SUCCESS,
  data
})

export const GetCommentFail = error => ({
  type: types.GET_COMMENT_FAIL,
  error
})

export const getComment = (commentData) => {


  return async dispatch => {
    dispatch(GetCommentRequest())
    try {


        let {data} = await axios.get(`${REACT_APP_FEEDBACK_API}/v1/zen3/api/feedback/read`)

        dispatch(GetCommentSuccess( data.data))
        dispatch(showNotification('success',data.data.message))



    } catch (e) {
      console.log(e);
      if (e.response){
        dispatch(GetCommentFail( e.response))
        dispatch(showNotification('error', e.response.data.message))
     }else{
       dispatch(GetCommentFail( e))
       dispatch(showNotification('error', e.response.data.message))
     }
    }
  }
}
