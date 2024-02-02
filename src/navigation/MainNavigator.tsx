import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import SplashScreen from 'react-native-splash-screen';

export default function MainNavigator() {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
