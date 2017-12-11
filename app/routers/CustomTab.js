
import React, { Component } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Text, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
// redux
import { connect } from "react-redux";
import { showHideCamera } from '../redux/global/Actions';

const styles = {
  tabbar: {
    flexDirection : "row",
    height: 42,
    justifyContent : "center",
    alignItems : "center",
    backgroundColor : "#fff"
  },
  activeTintColor: {
   backgroundColor: '#fff',
  },
  tab: {
    flex: 1,
    justifyContent : "center",
    alignItems : "center"    
  },
  tabText: {
    color: '#fff',
  },
  inactiveTintColor: {
    backgroundColor: '#fff',
  }
};

const iconMap = [["entypo", "home"], ["entypo", "squared-plus"],["ionicon", "ios-person"]];

class TabBar extends Component {

  render() {
    const {
      navigation,
      jumpToIndex
    } = this.props;

    const {
      routes
    } = navigation.state;
    const { activeTintColor, tab, tabbar, tabText, inactiveTintColor } = styles;
    return (
      <View style={tabbar}>
        {routes && routes.map((route, index) => {
          const focused = index === navigation.state.index;
          const tintColor = focused ? "#0000ff" : "#000";
          return (
            <TouchableWithoutFeedback
              key={route.key}
              style={tab}
              onPress={() => this._jumpToIndex(index)}
            >
              <View style={tab}>
                <Icon type={iconMap[index][0]} name={iconMap[index][1]} size={28} color={tintColor} />
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    );
  }

  _jumpToIndex = (index) => {
    const {
      navigation,
      jumpToIndex
    } = this.props;

    if (index == 1) {
      this.props.showHideCamera(true);
    } else {
      jumpToIndex(index);
    }
  }
}

function bindAction(dispatch) {
  return {
    showHideCamera : (showHideFlag) => dispatch(showHideCamera(showHideFlag))
  };
}

const mapStateToProps = state => ({
    global : state.global
});

export default connect(mapStateToProps, bindAction)(TabBar);