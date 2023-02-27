import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from '../screens/mainScreen';
import TopTabNavigator from './tobTab';
import VideoPlayScreen from '../screens/videoPlayscreen';

export default function AppNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{headerShadowVisible: false}}
        />
        <Stack.Screen name="TopTab" component={TopTabNavigator} />
        <Stack.Screen
          options={{headerShown: false}}
          name="VideoPlayscreen"
          component={VideoPlayScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
