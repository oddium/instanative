import React, { PureComponent } from "react";
import { View } from 'react-native'
import { MainTabbedRouter } from "./routers/MainTabbedRouter";
import TakePhotoModal from "./containers/media/TakePhotoModal";

class App extends PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    return <View style={{flex: 1}}>
            <MainTabbedRouter />
            <TakePhotoModal />
          </View>;
  }
}

export default App;
