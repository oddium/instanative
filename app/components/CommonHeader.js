import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Video from 'react-native-video'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Configuration from "../config/Configuration";

const styles = {
    commonHeader : {
        paddingTop: 20, 
        height: 62, 
        alignItems : "center", 
        justifyContent : "center", 
        backgroundColor : "#fff", 
        borderBottomWidth: 0.5, 
        borderBottomColor : "#ccc"
    }
}

export default class CommonHeader extends Component {

    render() {
        return <View style={styles.commonHeader}>
            <Image source={require("../images/Instagram_logo.svg.png")} style={{width: 120, height : 36}} />
        </View>
    }
}