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
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="TopTab" component={TopTabNavigator} />
        <Stack.Screen name="VideoPlayscreen" component={VideoPlayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
