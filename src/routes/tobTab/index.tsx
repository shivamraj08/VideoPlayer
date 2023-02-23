import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import VideosList from '../../screens/videos';
import ArticlesList from '../../screens/articles';
import Channels from '../../screens/channels';
import {StyleSheet, Text, View} from 'react-native';
import {normalize} from '../../utils/dimension';
import {COLORS} from '../../utils/colors';

const TopTabNavigator = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {backgroundColor: 'transparent'},
        tabBarIndicatorStyle: {
          width: 0,
        },
        tabBarLabel: ({focused}) => {
          return (
            <View
              style={{
                backgroundColor: focused ? COLORS.AQUA : COLORS.WHITE,
                width: normalize(112),
                // alignItems: 'center',
                justifyContent: 'center',
                padding: normalize(10),
                alignItems: 'center',
                borderRadius: normalize(20),
              }}>
              <Text
                style={
                  focused
                    ? {
                        fontSize: 16,
                        fontWeight: '700',
                        color: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }
                    : {
                        fontSize: 16,
                        color: COLORS.LIGHT_BLACK,
                        fontWeight: '700',
                      }
                }>
                {route.name}
              </Text>
            </View>
          );
        },
      })}>
      <Tab.Screen name="Channels" component={Channels} />
      <Tab.Screen name="Videos" component={VideosList} />
      <Tab.Screen name="Articles" component={ArticlesList} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: 'white',
  },
  labelStyle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
