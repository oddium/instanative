import React, { Component } from "react";
import { View, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const styles = {
    button: {
      overflow: 'hidden',
      width: 34,
      height: 34,
      justifyContent: 'center',
      alignItems: 'center'
    }
};

// Our custom component we want as a button in the nav bar
export default CameraButton = () => (
    <TouchableOpacity
      style={[styles.button, { marginLeft: -5 }]}
      onPress={() => console.log('pressed me!')}
    >
      <View style={styles.button}>
        <Ionicons name="ios-camera-outline" size={34} color="black" style={{ lineHeight: 34 }} />
      </View>
    </TouchableOpacity>
)