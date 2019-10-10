import * as types from "../../Constants/createCommentConstants"
import {
  showNotification
} from "../NotificationActions"
import { REACT_APP_FEEDBACK_API} from "../../../config"
import axios from 'axios'


export const CreateCommentRequest = () => ({
  type: types.CREATE_COMMENT_REQUEST
})

export const CreateCommentSuccess = (data) => ({
  type: types.CREATE_COMMENT_SUCCESS,
  data
})

export const CreateCommentFail = error => ({
  type: types.CREATE_COMMENT_FAIL,
  error
})

export const createComment = (commentData) => {


  return async dispatch => {
    dispatch(CreateCommentRequest())
    try {

        let payload = {
          TF_COMMENT_DESCRIPTION: commentData.TF_COMMENT_DESCRIPTION,
          TF_POST_ID: commentData.TF_POST_ID,
          TF_CREATED_BY: localStorage.getItem("user_id"),
          TF_EMAIL: localStorage.getItem("emails"),
          TF_FIRST_NAME: localStorage.getItem("first_name"),
          TF_LAST_NAME: localStorage.getItem("last_name"),
          TF_PROFILE_PIC: localStorage.getItem("profile_pic")
        }

        let data = await axios.post(`${REACT_APP_FEEDBACK_API}/v1/zen3/api/feedback/comment`, payload)

        dispatch(CreateCommentSuccess( data.data.data))
        dispatch(showNotification('success',data.data.data.message))



    } catch (e) {
      console.log(e);
      if (e.response){
        dispatch(CreateCommentFail( e.response))
        dispatch(showNotification('error', e.response.data.message))
     }else{
       dispatch(CreateCommentFail( e))
       dispatch(showNotification('error', e.response.data.message))
     }
    }
  }
}
