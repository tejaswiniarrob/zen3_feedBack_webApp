
import React from "react"
import { Provider } from "react-redux"
import { ConnectedRouter } from "react-router-redux"
import { push } from "react-router-redux"

import store, { history } from "../Redux/Store"
import Routes from "./Routes"
import 'font-awesome/css/font-awesome.min.css'
const axios = require ('axios')
import { REACT_APP_FEEDBACK_API} from "../config"



class App extends React.Component {



  async componentWillMount(){

   if(!localStorage.getItem("user_id")){
     let userData =  await axios.post(`${REACT_APP_FEEDBACK_API}/v1/zen3/api/users/developmentusers/create`).then((currentUser)=>{
       localStorage.setItem("first_name",currentUser.data.data.TF_FIRST_NAME)
       localStorage.setItem("last_name",currentUser.data.data.TF_LAST_NAME)
       localStorage.setItem("emails",currentUser.data.data.TF_EMAIL)
       localStorage.setItem("profile_pic",currentUser.data.data.TF_PROFILE_PIC)
       localStorage.setItem("user_id",currentUser.data.data.TF_USER_LOGIN_ID)
     }).catch((e)=>{
       console.log(e);
     })

   }


 }

  render() {

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
            <Routes />
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App
