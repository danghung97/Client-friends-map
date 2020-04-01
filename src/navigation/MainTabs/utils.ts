import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export const createTabScreenOptions = (
  label: string,
  icon: string,
  focusedIcon: string = icon,
) => ({
  tabBarIcon: ({color, focused}) =>
    React.createElement(Icon, {
      color,
      name: focused ? focusedIcon : icon,
      size: 24,
    }),
  tabBarLabel: ({color, focused}) =>
    React.createElement(
      Text,
      {
        style: [
          styles.tabBarLabel,
          {
            color,
            fontWeight: focused ? 'bold' : 'regular',
          },
        ],
      },
      label,
    ),
});

const styles = StyleSheet.create({
  tabBarLabel: {
    fontSize: 12,
    lineHeight: 24,
    textAlign: 'center',
  },
});
