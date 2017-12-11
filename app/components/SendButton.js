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

export default SendButton = () => (
    <TouchableOpacity
      style={[styles.button, { marginRight: -5, marginTop: 6 }]}
      onPress={() => console.log('pressed me!')}
    >
      <View style={styles.button}>
        <Ionicons name="ios-send-outline" size={34} color="black" style={{ lineHeight: 34 }} />
      </View>
    </TouchableOpacity>
  )