import React from "react"
import {history} from "../../Redux/Store"

import {NotificationContainer, NotificationManager} from 'react-notifications';

import { bindActionCreators } from "redux"

import { connect } from "react-redux"
import * as createPostActions from '../../Redux/Actions/createPostActions'
import * as createCommentActions from '../../Redux/Actions/createCommentActions'
import * as getCommentActions from '../../Redux/Actions/getCommentActions'
import * as developmentUsersActions from '../../Redux/Actions/developmentUsersActions'



class Posts extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }


  render(){
    return(
      <div>
      rgrthhhhhhhhhhhhhhhh

      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => ({
  createPostOperations: state.createPostOperations,
  createCommenttOperations: state.createCommenttOperations,
    getCommentOperations:state.getCommentOperations,
    developmentUsersOperations: state.developmentUsersOperations
})
const mapDispatchToProps = dispatch => ({

  createPostActions: bindActionCreators(createPostActions, dispatch),
  createCommentActions: bindActionCreators(createCommentActions, dispatch),
  getCommentActions: bindActionCreators(getCommentActions, dispatch),
    developmentUsersActions:bindActionCreators(developmentUsersActions,dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
