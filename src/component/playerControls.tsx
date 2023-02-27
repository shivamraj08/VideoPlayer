import React from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {normalize} from '../utils/dimension';
import {images} from '../utils/images';

/**
 *
 * @param props
 * @returns play pause button Skip Forward Button handle skip Backwards
 */
const PlayerControls = (props: {
  playing?: any;
  onPlay?: any;
  onPause?: any;
  skipForwards?: any;
  skipBackwards?: any;
}) => {
  const {playing, onPlay, onPause, skipForwards, skipBackwards} = props;

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.touchable} onPress={skipBackwards}>
        <Image source={images.videoBack} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.touchable}
        onPress={playing ? onPause : onPlay}>
        <Image
          source={playing ? images.videoPause : images.videoPlay}
          style={styles.togglePlayPauseImage}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable} onPress={skipForwards}>
        <Image source={images.videoForward} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: normalize(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: normalize(10),
    alignContent: 'center',
    marginBottom: normalize(30),
  },
  touchable: {
    padding: normalize(5),
  },
  touchableDisabled: {
    opacity: 0.3,
  },
  togglePlayPauseImage: {
    height: normalize(30),
    width: normalize(30),
    resizeMode: 'contain',
  },
});

export default React.memo(PlayerControls);
