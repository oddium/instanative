import React, { Component } from "react";
import { NavigationActions } from 'react-navigation';

//Base screen for React Navigation
export default class BaseScreen extends Component {

    constructor(props) {
        super(props);
    }

    navigateToScreen = (screenName, props) => {
        this.props.navigation.navigate(screenName, { ...props });
    }
}