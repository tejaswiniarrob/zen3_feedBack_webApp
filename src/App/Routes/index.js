import React from "react"
import { withRouter, Route, Switch, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { NotificationContainer, NotificationManager } from "react-notifications"
import { hideNotification } from "../../Redux/Actions/NotificationActions"
import "react-notifications/lib/notifications.css"
import './Style/index.css'

class Routes extends React.Component {

  constructor(props){
    super(props)
    this.state={

    }
  }

  componentDidUpdate() {
    let notification = { ...this.props.notification }
    if (notification.notify) {
      NotificationManager[notification.level](
        notification.message,
        notification.level.toUpperCase(),
        5000
      )
      this.props.hideNotification()
    }
  }


  async componentWillMount(){
  }
  render() {


      return (
        <div className="app-container">
          <Switch>



          </Switch>
          <NotificationContainer />
        </div>
      )

  }
}
const mapStateToProps = state => ({
  notification: state.notificationOperations
})
const mapDispatchToProps = dispatch => ({
  hideNotification: bindActionCreators(hideNotification, dispatch)
})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Routes))
