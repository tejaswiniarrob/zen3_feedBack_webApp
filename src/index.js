import App from "./App/index"
import $ from "jquery"
import React from "react"
import ReactDOM from "react-dom"
const target = document.querySelector("#root")
global.$ = $

$(document).ready(function () {
  ReactDOM.render(<App />, target)
});
