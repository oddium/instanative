import React, { Component } from 'react'
import { View, Image, TextInput, ImageBackground } from 'react-native'
import Button from 'react-native-button';
import BaseScreen from "../BaseScreenRN";
// redux
import { connect } from "react-redux";
import { tryAutoLogin, tryLogin, updateLoginForm } from "../../redux/auth/Actions";

const styles = {
  input : {
    flex: 1, color: "#fff", height: 50, marginLeft: 50, marginRight : 50, padding: 10, borderWidth : 0.5, borderColor : "#eee"
  }
}

class LoginScreen extends BaseScreen {

  static navigationOptions = { 
    header: null, 
    tabBarVisible: false 
  }
  isVisible = true;

  componentWillMount() {
    this.props.tryAutoLogin();
  }

  componentWillReceiveProps(newProps) {
    let {loginInProgress, loginCompleted, user} = newProps.auth;

    if (!loginInProgress && loginCompleted && user.id > 0 && this.isVisible) {
      this.navigateToScreen('HomeScreen');
      this.isVisible = false;
    }
  }

  render() {
    let {email, password} = this.props.auth.loginForm;

    return <ImageBackground imageStyle={{resizeMode: "stretch", width: null, height: null}} source={require("../../images/login-bg-2.jpg")} style={{flex: 1, backgroundColor : "black"}}>
              <View style={{flex: 1, alignItems : "center", justifyContent : "center"}}>
                <Image source={require("../../images/insta-logo.png")} style={{width: 125, height: 125}} />
                <Image source={require("../../images/Instagram_logo.svg.png")} style={{width: 120, height : 36, marginTop: 20}} />
              </View>
              <View style={{flex: 1}}>
                <View style={{height: 50}}>
                    <TextInput autoCapitalize={"none"} value={email} style={styles.input} onChangeText={this._onEmailChanged} />
                </View>
                <View style={{height: 50, marginTop: 20}}>
                    <TextInput autoCapitalize={"none"} secureTextEntry={true} value={password} style={styles.input} onChangeText={this._onPasswordChanged} />
                </View>
                <View style={{height: 50, marginTop: 20}}>
                  <Button
                    containerStyle={{justifyContent : "center", borderRadius : 5, backgroundColor : "white", height: 50, marginLeft: 50, marginRight : 50}}
                    style={{color : "#444"}}
                    onPress={this._onLoginButtonClicked}>
                    Login
                  </Button>
                </View>
              </View>
          </ImageBackground>
  }

  _onLoginButtonClicked = () => {
    let {email, password} = this.props.auth.loginForm;
    this.props.tryLogin(email, password);
  }

  _onEmailChanged = (newEmail) => {
    let {email, password} = this.props.auth.loginForm;
    this.props.updateLoginForm(newEmail, password);
  }

  _onPasswordChanged = (newPassword) => {
    let {email, password} = this.props.auth.loginForm;
    this.props.updateLoginForm(email, newPassword);
  }
}

function bindAction(dispatch) {
  return {
    tryAutoLogin : () => dispatch(tryAutoLogin()),
    tryLogin : (email, password) => dispatch(tryLogin(email, password)),
    updateLoginForm : (email, password) => dispatch(updateLoginForm(email, password))
  };
}

const mapStateToProps = state => ({
    auth : state.auth
});

export default connect(mapStateToProps, bindAction)(LoginScreen);
