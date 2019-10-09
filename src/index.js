import App from "./App/index"
import $ from "jquery"
import React from "react"
import ReactDOM from "react-dom"
import { push } from "react-router-redux"
import { REACT_APP_PAAS_ORCHESTRATOR_API,REACT_APP_PAAS_ORCHESTRATOR_WEBAPP } from "./config"
import { showNotification, hideNotification } from './Redux/Actions/NotificationActions'
import store from "./Redux/Store";
import {history} from "./Redux/Store"

const target = document.querySelector("#root")
const axios = require('axios')
global.$ = $


let initOptions = {
  responseMode: 'fragment',
  flow: 'standard'
};
//console.log(window);
let Keycloak = window.Keycloak
//console.log(Keycloak);
// if(Keycloak) {
  let kc = new Keycloak()
  window.kc = kc
  kc.init({ initOptions }).success(async(authenticated) => {
    if (authenticated) {
      kc.loadUserInfo()
        .success((userInfo) => {
          registerNotificationChannel(userInfo.email)
          app(userInfo)
        })
        .error(function () {
        });
            //console.log("window.location.href",window.location);
            //console.log('window.kc.tokenParsed.defaultTokenwindow.kc.tokenParsed.defaultToken',window.kc.tokenParsed.defaultToken);
        
    }
    else {
      kc.login()
    }
  }).error(function () {
    //console.log("Error")
  });
// }else{
//   //console.log('asdsdwf');
//   window.location.href= '/'
// }


function registerNotificationChannel (email) {
  window.notificationSource = new EventSource(`${REACT_APP_PAAS_ORCHESTRATOR_API}/v1/rpa/metadata/notification-stream?email=${email}`)
  window.notificationSource.onmessage = (evt) => {
    try {
      let msg = JSON.parse(evt.data)
      store.dispatch(showNotification(msg.STATUS, msg.NOTIFICATION_TEXT))
    } catch (e) {
      //console.log(evt.data)
    }
  }
}

const app = (userInfo) => {

  ReactDOM.render(<App />, target)

}
