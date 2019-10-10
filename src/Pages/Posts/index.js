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
      loading:true,
      commentsPosts: [],
      addCommentInput: [],
      "addPostInput": ""

    }
  }

  componentWillMount(){
    this.props.getCommentActions.getComment()

  }

  componentWillReceiveProps(newprops){
    this.setState({
      loading: newprops.getCommentOperations.loading,

      commentsPosts: newprops.getCommentOperations? newprops.getCommentOperations.data: []
    })

  }

  handleChange = (e,postIndex) =>{
    if(e.target.name == 'addCommentInput'){
      let addCommentInput = this.state.addCommentInput
      if(addCommentInput.length - 1 >= postIndex){
        addCommentInput[postIndex] = e.target.value

      }else{
        addCommentInput.push(e.target.value)
      }
      this.setState({
        addCommentInput: addCommentInput
      })

    }

  }

  addCommentButton=(e,postIndex,TF_POST_ID)=>{
     this.props.createCommentActions.createComment({
      TF_COMMENT_DESCRIPTION: this.state.addCommentInput[postIndex],
      TF_POST_ID: TF_POST_ID,
    }).then(()=>{
      this.props.getCommentActions.getComment()

      let postIndexState = addCommentInput[postIndex]
      this.setState({
        [postIndexState]:""
      })
    }).catch(()=>{

    })


  }

  handlePost = (e) =>{
    this.setState({
        addPostInput: e.target.value
      })


  }

  addPostButton=(e)=>{

      this.props.createPostActions.createPost({
       TF_POST_DESCRIPTION: this.state.addPostInput,
     }).then(()=>{
       this.props.getCommentActions.getComment()
       this.setState({
         addPostInput:""
       })
     }).catch(()=>{

     })






  }


  render(){
    if(!this.state.loading){
      if(this.state.commentsPosts && this.state.commentsPosts.length !== 0){
        // console.log(this.state.commentsPosts);
        return(
          <div className= "main-container">
            <div className="post-section">

                <div className="post-comment">
                  <textarea placeholder="what's your response?" name="addPostInput" value= {this.state.addPostInput} onChange={(e)=>{this.handlePost(e)}}></textarea>
                  <button onClick={(e)=>{this.addPostButton(e)}}>Post</button>
                </div>
                <div className="post-assign">
                </div>
              </div>

            <div className="post-section">

              {
                this.state.commentsPosts.map((commentPost, postIndex)=>{
                  let pi = postIndex
                  let createPostDate = `${new Date(commentPost.post.TF_CREATED_DATE)}`
                  return(

                    <div className="post-card" key= "pi">
                      <div className="post-type">
                      </div>
                      <div className="post-content">
                        <div style={{backgroundColor: "#ccc",width: '50px',height: '50px'}}><img src={commentPost.post.TF_PROFILE_PIC}/></div>
                        <div className="post-text">
                          <h1> <span>{commentPost.post.TF_FIRST_NAME}</span> {commentPost.post.TF_POST_DESCRIPTION}</h1>
                          <h5>Posted By - {commentPost.post.TF_EMAIL}</h5>
                          <h5>Posted time - {createPostDate}</h5>
                        </div>
                        <div><i className="fa fa-cog"></i></div>
                      </div>

                      <div>
                        <h3> Comments </h3>
                        {

                          commentPost.comments.map((comment, commentIndex)=>{
                            let createCommentDate = `${new Date(comment.TF_CREATED_DATE)}`

                            return(
                              <div key="commentIndex" className = "post-card">

                              <div className="post-content">
                              <div style={{backgroundColor: "#ccc",width: '50px',height: '50px'}}><img src={comment.TF_PROFILE_PIC}/></div>

                                  <div className="post-text">
                                    <h3> <span>{comment.TF_FIRST_NAME}</span> {comment.TF_COMMENT_DESCRIPTION}</h3>
                                    <h6>Posted By - {comment.TF_EMAIL}</h6>
                                    <h6>Posted time - {createCommentDate}</h6>
                                  </div>
                                </div>
                              </div>
                            )
                          })
                        }
                      </div>

                      <div className="post-comment">
                        <textarea placeholder="what's your response?" name="addCommentInput" value= {this.state.addCommentInput[postIndex]} onChange={(e)=>{this.handleChange(e,postIndex)}}></textarea>
                        <button onClick={(e)=>{this.addCommentButton(e,postIndex,commentPost.post.TF_POST_ID)}}>Add comment</button>
                      </div>
                      <div className="post-assign">
                      </div>
                    </div>
                  )
                })
              }

            </div>
          </div>




        )
      }else{
        return(
          <div>
            No Posts ...
          </div>
        )
      }
    }else{
      console.log('loading');
      return(
        <div>
          loading ...
        </div>
      )
    }
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
