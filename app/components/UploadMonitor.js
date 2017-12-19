import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import ProgressBar from 'react-native-progress/Bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Configuration from "../config/Configuration";

export const UploadMonitor = (props) => (
    <View style={{flexDirection : "row", padding : 10}}>
        <Text style={{color: "#444", fontSize: 16}}>UPLOADING :</Text>
        <ProgressBar progress={props.progress} width={200} height={16} useNativeDriver={true} color={"#ccc"} style={{flex: 1, marginLeft: 5}} />
    </View>
)