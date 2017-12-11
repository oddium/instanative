import { Navigation } from 'react-native-navigation';

import HomeScreen from './home/HomeScreen';
import SearchScreen from './media/SearchScreen';
import AddScreen from './media/AddScreen';
import FavoriteScreen from './favorites/FavoriteScreen';
import ProfileScreen from './profile/ProfileScreen';
import LoginScreen from "./login/LoginScreen";
import WelcomeScreen from "./welcome/WelcomeScreen";
// import components
import CameraButton from "../components/CameraButton";
import SendButton from "../components/SendButton";

// register components
Navigation.registerComponent('CameraButton', () => CameraButton);
Navigation.registerComponent('SendButton', () => SendButton);

// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
  Navigation.registerComponent('instanative.HomeScreen', () => HomeScreen, store, Provider);
  Navigation.registerComponent('instanative.SearchScreen', () => SearchScreen, store, Provider);
  Navigation.registerComponent('instanative.AddScreen', () => AddScreen, store, Provider);
  Navigation.registerComponent('instanative.FavoriteScreen', () => FavoriteScreen, store, Provider);
  Navigation.registerComponent('instanative.ProfileScreen', () => ProfileScreen, store, Provider);
  Navigation.registerComponent('instanative.WelcomeScreen', () => WelcomeScreen, store, Provider);
  Navigation.registerComponent('instanative.LoginScreen', () => LoginScreen, store, Provider);
}
