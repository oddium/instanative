import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Configuration from "../config/Configuration";

const { width } = Dimensions.get('window');

export default class InstaImagePreview extends Component {

    state = {
        source : null,
        random : ""
    }

    constructor(props) {
        super(props);
        this.state.source = props.source;
    }

    render() {
        let {source,random} = this.state;

        return <Image style={{ height: 600, width }}
                        source={{ uri: this._getImageSource() }} 
                        onError={this._reloadImage}
                        resizeMode="contain" />
    }

    _reloadImage = (error) => {
        let {source, random} = this.state; 
        console.log("Error while loading image err ->", error.nativeEvent);
        this.setState({random : "" + new Date().getTime() });
    }

    _getImageSource = () => {
        let {source, random} = this.state; 
        return Configuration.STATIC_HOST + source + "?_=" + random;
    }
}
