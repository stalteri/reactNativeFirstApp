import React from 'react';

import LoginScreen from './screens/login';
import { View } from 'react-native';

const App: () => React$Node = () => {
  return (
    <View style={{ flex: 1 }}>
      <LoginScreen></LoginScreen>
    </View>
  )
}

export default App;