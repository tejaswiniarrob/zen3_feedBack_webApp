import * as types from "../../Constants/createPostConstants"

const initialState = {
  data:undefined,
  loading:true,
  error: null
}

export function createPostReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_POST_REQUEST:
      return Object.assign({}, state, {
        error: null,
        loading:true
      })
    case types.CREATE_POST_SUCCESS:
      return Object.assign({}, state, {
        data: action.data,
        error: null,
        loading:false
      })
    case types.CREATE_POST_FAIL:
      return Object.assign({}, state, {
        error: action.error,
        loading:false
      })
    default:
      return state
  }
}
