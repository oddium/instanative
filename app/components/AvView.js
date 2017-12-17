import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Configuration from "../config/Configuration";

const { width } = Dimensions.get('window');

export default class AvView extends Component {

  state = {

  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.type === 'image') {
      Image.getSize(Configuration.STATIC_HOST + this.props.source, (w, h) => {
        this.setState({ imageHeight: Math.floor(h * (width / w)) })
      });
    }
  }

  render() {
      return (
        <View>
          <Image
            source={{ uri: Configuration.STATIC_HOST + this.props.source }}
            style={{ width, height: 500 }}
            resizeMode={'contain'}
          />
        </View>
      )
  }
}
