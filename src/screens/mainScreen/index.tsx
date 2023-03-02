import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';

import TopTabNavigator from '../../routes/tobTab';
import Header from '../../component/header';

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopTabNavigator />
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
