import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StatusBar } from 'react-native'
import Camera from 'react-native-camera';
import Modal from "react-native-modal";
import BaseScreen from "../BaseScreenRN";
import { Icon } from 'react-native-elements';
// redux
import { connect } from "react-redux";
import { doUpload } from "../../redux/media/Actions";
import { showHideCamera } from "../../redux/global/Actions";

class TakePhotoModal extends Component {

  constructor(props) {
    super(props);
  }

  render = () => {
    return (<Modal isVisible={this.props.global.showCameraModal} style={{margin : 0}}>
              <Camera
                ref={(cam) => {
                  this.camera = cam;
                }}
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  alignItems: 'center'
                }}
                aspect={Camera.constants.Aspect.fill}
                captureQuality={"medium"}
                captureTarget={Camera.constants.CaptureTarget.disk}>
                <View style={{flex: 1, width: "100%", alignItems : "flex-end"}}>
                    <TouchableOpacity style={{flex: 1, paddingRight: 30, paddingTop : 30}} onPress={this._onCloseModalClicked}>
                      <Icon type={"ionicon"} name={"ios-close-circle"} size={28} color={"red"} />
                    </TouchableOpacity>
                </View>
                <View style={{width: 100, height: 100, borderRadius : 50, marginBottom : 20, opacity : 0.5, backgroundColor : "#ccc", justifyContent : "center", alignItems : "center"}}>
                    <TouchableOpacity onPress={this._onTakePictureClicked}>
                    <Text>Take Photo</Text>
                  </TouchableOpacity> 
                </View>
              </Camera>
            </Modal>);
  }

  _onTakePictureClicked = async () => {
    const options = {
      captureTarget : Camera.constants.CaptureTarget.temp
    };
    
    this.camera.capture({metadata: options})
        .then((imageData) => {
            this._startUpload(imageData.path);
        })
        .catch(err => {});
  }

  _startUpload = (imageUri) => {
    this._closeCameraModal();
    setTimeout(() => {
      this.props.doUpload(imageUri);
    }, 500);
  }

  _onCloseModalClicked = () => {
    this._closeCameraModal();
  }

  _closeCameraModal = () => {
    this.props.showHideCamera(false);
  }
}

function bindAction(dispatch) {
  return {
    showHideCamera : (showHideFlag) => dispatch(showHideCamera(showHideFlag)),
    doUpload : (imageUri) => dispatch(doUpload(imageUri))
  };
}

const mapStateToProps = state => ({
    media : state.media,
    global : state.global
});

export default connect(mapStateToProps, bindAction)(TakePhotoModal);