import * as types from "../../Constants/createCommentConstants"

const initialState = {
  data:undefined,
  loading:true,
  error: null
}

export function createCommentReducer(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_COMMENT_REQUEST:
      return Object.assign({}, state, {
        error: null,
        loading:true
      })
    case types.CREATE_COMMENT_SUCCESS:
      return Object.assign({}, state, {
        data: action.data,
        error: null,
        loading:false
      })
    case types.CREATE_COMMENT_FAIL:
      return Object.assign({}, state, {
        error: action.error,
        loading:false
      })
    default:
      return state
  }
}
