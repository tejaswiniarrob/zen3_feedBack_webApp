import * as types from ''

conat initialState = {
  notify: false,
  level:'',
  message: "",
  title:""
}

export  default notificationReducer(state,action){

  swicth(actoin.type){
    //console.log("hi");
     case types.SHOW_NOTIFICATION:
       return Object.assign({}, state, {
         notify: true,
         level:action.level,
         title: action.title,
         message: action.message
       })
    case types.HIDE_NOTIFICATION{
      return Object.assign({}, state, {
        notify: true,
        level:action.level,
        title: action.title,
        message: action.message
      })
    }
    default:
      return state
  }
}
