import * as types from "../../Constants/createPostConstants"
import {
  showNotification
} from "../NotificationActions"
import { REACT_APP_FEEDBACK_API} from "../../../config"
import axios from 'axios'


export const CreatePostRequest = () => ({
  type: types.CREATE_POST_REQUEST
})

export const CreatePostSuccess = (data) => ({
  type: types.CREATE_POST_SUCCESS,
  data
})

export const CreatePostFail = error => ({
  type: types.CREATE_POST_FAIL,
  error
})

export const createPost = (postData) => {


  return async dispatch => {
    dispatch(CreatePostRequest())
    try {

        let payload = {
          TF_POST_DESCRIPTION: postData.postDescription
        }

        let {data} = await axios.post(`${REACT_APP_FEEDBACK_API}/v1/zen3/api/feedback/post`, payload)
        
        dispatch(CreatePostSuccess( data.data))
        dispatch(showNotification('success',data.data.message))



    } catch (e) {
      console.log(e);
      if (e.response){
        dispatch(CreatePostFail( e.response))
        dispatch(showNotification('error', e.response.data.message))
     }else{
       dispatch(CreatePostFail( e))
       dispatch(showNotification('error', e.response.data.message))
     }
    }
  }
}
