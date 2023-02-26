import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from '../screens/mainScreen';
import TopTabNavigator from './tobTab';
import VideoPlayScreen from '../screens/videoPlayscreen';
import CustomControls from '../component/customControls';

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
        <Stack.Screen
          options={{headerShown: false}}
          name="VideoPlayscreen"
          component={VideoPlayScreen}
        />
        <Stack.Screen name="CustomControl" component={CustomControls} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
