import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {vh, vw} from '../utils/dimension';
import {images} from '../utils/images';

export default function Header() {
  return (
    <TouchableOpacity style={styles.touchableBtn}>
      <Image
        style={styles.backArrowStyle}
        source={images.backArrow}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backArrowStyle: {
    height: vw(20),
    width: vw(20),
    tintColor: 'black',
  },
  touchableBtn: {
    height: vh(24),
    width: vh(24),
  },
});
