import React, {useMemo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Friends from './FriendsStack';
import Map from './MapStack';
import {createTabScreenOptions} from './utils';

export type MainTabsParamList = {
  FriendsStack: undefined;
  MapStack: undefined;
};

const Tab = createBottomTabNavigator<MainTabsParamList>();

function MainTabs() {
  // const tabBarOptions
  const optionList = useMemo(
    () => ({
      friends: createTabScreenOptions('Friends', 'users'),
      map: createTabScreenOptions('Map', 'location-pin'),
    }),
    [],
  );
  return (
    <Tab.Navigator>
      <Tab.Screen name="MapStack" component={Map} options={optionList.map} />
      <Tab.Screen
        name="FriendsStack"
        component={Friends}
        options={optionList.friends}
      />
    </Tab.Navigator>
  );
}

export default MainTabs;
