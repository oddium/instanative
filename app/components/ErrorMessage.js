import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Toast from "native-toaster";

export default class ErrorMessage extends Component {

    lastErrorTime = null;

    constructor(props) {
        super();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.enableError && nextProps.showError) {
            Toast.show("Error in operation");
        }
    }

    render() {
        return null;
    }
}