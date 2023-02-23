import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppNavigator from '../../routes/mainNavigators';
import {images} from '../../utils/images';
import {normalize} from '../../utils/dimension';
import TopTabNavigator from '../../routes/tobTab';

const MainScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flexDirection: 'row', backgroundColor: 'red'}}></View>
      <TopTabNavigator />
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  backArrowStyle: {
    height: normalize(30),
    width: normalize(30),
    resizeMode: 'contain',
    marginLeft: normalize(15),
  },
});
