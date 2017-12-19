import React, { Component } from "react";
import { StackNavigator, TabNavigator } from "react-navigation";
import { Icon } from 'react-native-elements';
import LoginScreen from "../containers/login/LoginScreen";
import EmptyScreen from "../containers/media/EmptyScreen";
import HomeScreen from "../containers/home/HomeScreen";
import ProfileScreen from "../containers/profile/ProfileScreen";
import InstaTab from "./InstaTab";

export const MainTab = StackNavigator({
  LoginScreen: {
    screen: LoginScreen
  },
  HomeScreen: {
    screen: HomeScreen
  },
});

export const Tabs = TabNavigator({
  MainTab: {
    screen: MainTab,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={35} color={tintColor} />,
    },
  },
  EmptyScreen: {
    screen: EmptyScreen
  },
  ProfileScreen : {
    screen : ProfileScreen
  }
}, {
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
  },
  tabBarComponent: InstaTab,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  lazy : true,
  swipeEnabled : false
});

export const MainTabbedRouter = StackNavigator({
  Tabs: {
    screen: Tabs,
  }
}, {
  mode: 'modal',
  headerMode: 'none',
});
