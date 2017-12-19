
import React, { Component } from 'react';
import { 
  View, 
  StyleSheet, 
  TouchableWithoutFeedback, 
  Text, 
  Dimensions 
} from 'react-native';
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
  tab: {
    flex: 1,
    justifyContent : "center",
    alignItems : "center"    
  }
};

const iconMap = [["entypo", "home"], ["entypo", "squared-plus"],["ionicon", "ios-person"]];

class InstaTab extends Component {

  render() {
    // navigation ve jumpToIndex metodları react-navigation tarafından sağlanıyor.
    const {
      navigation,
      jumpToIndex
    } = this.props;

    const {
      routes
    } = navigation.state;
    const { tab, tabbar } = styles;
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

export default connect(mapStateToProps, bindAction)(InstaTab);