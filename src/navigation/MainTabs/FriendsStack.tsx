import React from 'react';
// import {} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import FriendsScreen from '../../screens/ListFriends';

export type FriendsStackParamList = {
  Friends: undefined;
};

const Stack = createStackNavigator<FriendsStackParamList>();

function Friends() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Friends"
        component={FriendsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Friends;
