import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import VideosList from '../../screens/videos';
import ArticlesList from '../../screens/articles';
import Channels from '../../screens/channels';
import {StyleSheet, Text, View} from 'react-native';
import {normalize} from '../../utils/dimension';
import {COLORS} from '../../utils/colors';
import {STRINGS} from '../../utils/strings';

const TopTabNavigator = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: styles.tabBarStyle,
        tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
        tabBarLabel: ({focused}) => {
          return (
            <View
              style={[
                styles.container,
                {backgroundColor: focused ? COLORS.AQUA : COLORS.WHITE},
              ]}>
              <Text style={focused ? styles.activeStyle : styles.inactiveStyle}>
                {route.name}
              </Text>
            </View>
          );
        },
      })}>
      <Tab.Screen name={STRINGS.SCREEN_NAME.CHANNELS} component={Channels} />
      <Tab.Screen name={STRINGS.SCREEN_NAME.VIDEOS} component={VideosList} />
      <Tab.Screen
        name={STRINGS.SCREEN_NAME.ARTICLES}
        component={ArticlesList}
      />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;

const styles = StyleSheet.create({
  container: {
    width: normalize(112),
    justifyContent: 'center',
    padding: normalize(10),
    alignItems: 'center',
    borderRadius: normalize(20),
  },
  activeStyle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inactiveStyle: {
    fontSize: 16,
    color: COLORS.LIGHT_BLACK,
    fontWeight: '700',
  },
  tabBarStyle: {
    backgroundColor: COLORS.WHITE,
  },
  labelStyle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  tabBarIndicatorStyle: {
    width: 0,
  },
});
