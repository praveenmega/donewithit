/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import NavigationTheme from './app/navigation/NavigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import OffLineNotice from './app/components/OffLineNotice/OffLineNotice';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [user, setUser] = useState();
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    restoreUser();
    setAppIsReady(true);
  }, []);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    setUser(user);
  };

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{flex: 1}} onLayout={onLayoutRootView}>
      <AuthContext.Provider value={{user, setUser}}>
        <OffLineNotice />
        <NavigationContainer theme={NavigationTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </AuthContext.Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
