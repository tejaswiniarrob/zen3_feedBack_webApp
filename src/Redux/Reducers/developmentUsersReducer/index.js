import * as types from "../../Constants/developmentUsersConstants"

const initialState = {
  data:undefined,
  loading:true,
  error: null
}

export function developmentUsersReducer(state = initialState, action) {
  switch (action.type) {
    case types.DEVELOPMENT_USERS_REQUEST:
      return Object.assign({}, state, {
        error: null,
        loading:true
      })
    case types.DEVELOPMENT_USERS_SUCCESS:
      return Object.assign({}, state, {
        data: action.data,
        error: null,
        loading:false
      })
    case types.DEVELOPMENT_USERS_FAIL:
      return Object.assign({}, state, {
        error: action.error,
        loading:false
      })
    default:
      return state
  }
}
