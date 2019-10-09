import moment from "moment"
import authenticateApiRequest from "./Redux/Actions/LogoutActions/authenticateApiRequest"
import refreshTokenApi from "./Redux/Actions/LoginActions/refreshTokenApi"


const checkValidation =(history, click)=> {
  if (localStorage.getItem("techforce-accessToken")) {
    //console.log('hiiiiiiiiiiiiiiiiiiiii');
    const timeStamp = new Date(localStorage.getItem("login_time_stamp"))
    const end = new Date()
    const noOfHours = parseInt(moment.utc(moment(end).diff(moment(timeStamp))).format("HH"))
    const noOfDays = moment(end).diff(moment(timeStamp), "days")
    if (noOfDays == 0 && noOfHours < 3) {
      // //console.log("in 3hrs if")
      if (click) {
        //Let the user pass
      } else {
        authenticateApiRequest()
          .then(response => {
            if (history.location.pathname === "/") {
              history.push("/user/speed")
            } else {
              //Needs to continue on any location on click
              // //console.log("location tracked", history.location.pathname)
            }
          })
          .catch(e => {
            history.push("/") //needs to be updated later
            if (click) {
              alert("Session ended")
            }
          })
      }
    } else {
      // //console.log("in 3hrs else", noOfDays)
      if (noOfDays < 1) {
        // //console.log("in <1 day if")
        refreshTokenApi()
          .then(response => {
            localStorage.setItem("techforce-refreshToken", response.data.refreshToken)
            localStorage.setItem("techforce-accessToken", response.data.accessToken)
            const ts = new Date()
            localStorage.setItem("login_time_stamp", ts)
            if (history.location.pathname == "/") {
              history.push("/user/speed")
            } else {
              //Needs to continue on any location on click
              // //console.log("location tracked", history.location.pathname)
            }
          })
          .catch(e => {
            //console.log("refreshTokenApi failed")
            localStorage.removeItem("techforce-refreshToken")
            localStorage.removeItem("techforce-accessToken")
            history.push("/")
          })
      } else {
        localStorage.removeItem("techforce-refreshToken")
        localStorage.removeItem("techforce-accessToken")
        history.push("/")
      }
    }
  } else {
    //console.log('helloooooooooooooooooooo');
    //Access token does not exist
    // //console.log("in main else")
    if (history.location.pathname === "/") {
      //stay at login page
    } else {
      if (/\/policy\/[a-z0-9]*.pdf/gi.test(history.location.pathname) || history.location.pathname === "/register" || history.location.pathname === "/reset") {
        // //console.log("let the user log in again", history.location.pathname)
      } else {
        history.push("/")
      }
    }
  }
}


export default checkValidation
