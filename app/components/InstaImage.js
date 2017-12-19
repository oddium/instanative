import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Configuration from "../config/Configuration";
import FastImage from 'react-native-fast-image';

const { width } = Dimensions.get('window');

export default class InstaImage extends Component {

  state = {
    source : null
  }

  constructor(props) {
      super(props);
      this.state.source = props.source;
  }

  render() {
      let {source} = this.state;
      let {width, height} = this.props;
      let imageWidth = width ? width : width;
      let imageHeight = height ? height : 600;

      return <FastImage style={{ height : imageHeight, width : imageWidth }}
                      source={{
                          uri : this._getImageSource(),
                          priority: FastImage.priority.normal
                      }}
                      resizeMode={FastImage.resizeMode.stretch} />
  }

  _getImageSource = () => {
    let {source} = this.state; 
    return Configuration.STATIC_HOST + source;
  }
}
