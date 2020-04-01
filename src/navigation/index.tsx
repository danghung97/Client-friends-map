import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MainTabs from './MainTabs';

import SignInScreen from '../screens/SignIn';

type RootStackParamList = {
  SignIn: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

function NavigationApp() {
  const authenticated = false; // mock data, waiting api login
  return (
    <NavigationContainer>
      {!authenticated && (
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{header: () => null, headerBackTitle: undefined}}
          />
        </Stack.Navigator>
      )}
      {authenticated && <MainTabs />}
    </NavigationContainer>
  );
}

export default NavigationApp;
