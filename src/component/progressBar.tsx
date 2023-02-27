import React from 'react';
import Slider from '@react-native-community/slider';
import {View, Text, StyleSheet} from 'react-native';
import {normalize} from '../utils/dimension';
import {COLORS} from '../utils/colors';

/**
 *
 * @param props
 * @returns handle progress of the video current time
 */
const ProgressBar = (props: {
  currentTime?: any;
  duration?: any;
  onSlideCapture?: any;
  onSlideStart?: any;
  onSlideComplete?: any;
  containerStyle?: any;
}) => {
  const {
    currentTime,
    duration,
    onSlideCapture,
    onSlideStart,
    onSlideComplete,
    containerStyle,
  } = props;
  const getMinutesFromSeconds = (time: number) => {
    const minutes = time >= 60 ? Math.floor(time / 60) : 0;
    const seconds = Math.floor(time - minutes * 60);

    return `${minutes >= 10 ? minutes : '0' + minutes}:${
      seconds >= 10 ? seconds : '0' + seconds
    }`;
  };

  const position = getMinutesFromSeconds(currentTime);
  const fullDuration = getMinutesFromSeconds(duration);

  const handleOnSlide = (time: any) => {
    onSlideCapture({seekTime: time});
  };

  return (
    <View style={[styles.wrapper, containerStyle]}>
      <Slider
        value={currentTime}
        minimumValue={0}
        maximumValue={duration}
        step={1}
        onValueChange={handleOnSlide}
        onSlidingStart={onSlideStart}
        onSlidingComplete={onSlideComplete}
        minimumTrackTintColor={COLORS.LIGHT_AQUA}
        maximumTrackTintColor={COLORS.WHITE}
      />
      <View style={styles.timeWrapper}>
        <Text style={styles.timeLeft}>
          {position}
          {' / '}
          {fullDuration}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '90%',
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 1,
  },
  timeWrapper: {
    flexDirection: 'row',
    paddingHorizontal: normalize(10),
  },
  timeLeft: {
    flex: 1,
    fontSize: 16,
    color: COLORS.WHITE,
  },
});

export default React.memo(ProgressBar);
