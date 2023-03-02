import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from '../screens/mainScreen';
import TopTabNavigator from './tobTab';
import VideoPlayScreen from '../screens/videoPlayscreen';
import Header from '../component/header';
import {normalize} from '../utils/dimension';
import {StyleSheet} from 'react-native';
import {STRINGS} from '../utils/strings';

export default function AppNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerLeft: () => <Header />,
          headerShown: true,
        }}>
        <Stack.Screen
          name={STRINGS.SCREEN_NAME.FAVORITE}
          component={MainScreen}
          options={{
            headerShadowVisible: false,
            headerTitleStyle: styles.headerStyle,
          }}
        />
        <Stack.Screen
          name={STRINGS.SCREEN_NAME.TOPTAB}
          component={TopTabNavigator}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name={STRINGS.SCREEN_NAME.VIDEO_PLAYER_SCREEN}
          component={VideoPlayScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    fontWeight: '900',
    fontSize: normalize(20),
  },
});
