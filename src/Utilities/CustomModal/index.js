import React from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import "./index.css"

class CustomModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  handleShow=()=>{
    this.setState({ show: true });
  }

  handleHide=()=>{
    this.setState({ show: false });
  }

  render() {
    return (
        <div className="ModalContainer" style={{}}>
        <Modal style = {{}}
          {...this.props}
          isOpen={this.state.show}
          toggle={this.handleHide}
        >
          <div style={{display:"block"}}>
          <button className="modal_heder_hide" onClick={this.handleHide}> <i className="fa fa-times"></i></button>
          <ModalHeader style={{padding:"0"}}>
              {this.props.name}
              {this.props.error}
          </ModalHeader>
        </div>
          <ModalBody style={{paddingRight:0}}>
                {this.props.comp}
          </ModalBody>
        </Modal></div>
    );
  }
}

export default CustomModal
