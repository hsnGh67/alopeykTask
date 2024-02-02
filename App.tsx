import {ServerContextProvider} from './src/mockServer/ServerContext';
import MainNavigator from '@navigation/MainNavigator';
import React from 'react';
import {View} from 'react-native';

function App(): JSX.Element {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
      }}>
      <ServerContextProvider>
        <MainNavigator />
      </ServerContextProvider>
    </View>
  );
}

export default App;
