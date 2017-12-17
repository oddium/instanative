import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Configuration from "../config/Configuration";

const { width } = Dimensions.get('window');

export default class InstaImage extends Component {

  constructor(props) {
    super(props);
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
