import {StyleSheet, View} from 'react-native';
import React from 'react';
import AppNavigator from './src/routes/mainNavigators';
import MainScreen from './src/screens/mainScreen';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({});
