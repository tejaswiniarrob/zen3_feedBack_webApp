
import React from "react"
import { Provider } from "react-redux"
import { ConnectedRouter } from "react-router-redux"
import { push } from "react-router-redux"

import store, { history } from "../Redux/Store"
import Routes from "./Routes"
import 'font-awesome/css/font-awesome.min.css'





class App extends React.Component {



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
