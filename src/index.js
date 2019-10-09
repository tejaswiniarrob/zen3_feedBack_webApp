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



const app = (userInfo) => {

  ReactDOM.render(<App />, target)

}
