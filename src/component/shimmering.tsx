import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  StyleSheet,
  View,
} from 'react-native';
import {normalize, screenHeight} from '../utils/dimension';
import {COLORS} from '../utils/colors';
const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

/**
 *
 * @returns Video Play Shimmer
 */
const VideoPlayerShimmer = () => {
  const videoContainerRef = React.useRef<any>();
  React.useEffect(() => {
    const facebookAnimated = Animated.stagger(400, [
      Animated.parallel([videoContainerRef.current.getAnimated()]),
    ]);
    Animated.loop(facebookAnimated).start();
  }, []);

  return (
    <View style={styles.videoPlayerShimmerContainer}>
      <ShimmerPlaceholder
        style={styles.shimmerVideoStyle}
        ref={videoContainerRef}
        stopAutoRun
      />
      <ActivityIndicator size={40} style={styles.loaderStyle} />
    </View>
  );
};

/**
 *
 * @returns Custom Card Shimmer
 * Handle animation
 */
const CustomShimmer = () => {
  const videoContainerRef = React.useRef<any>();
  const textRef = React.useRef<any>();

  React.useEffect(() => {
    const facebookAnimated = Animated.stagger(400, [
      Animated.parallel([
        videoContainerRef.current.getAnimated(),
        textRef.current.getAnimated(),
      ]),
    ]);
    Animated.loop(facebookAnimated).start();
  }, []);

  return (
    <View style={styles.customShimmerContainer}>
      <ShimmerPlaceholder
        style={styles.videoImageStyle}
        ref={videoContainerRef}
        stopAutoRun
      />
      <ShimmerPlaceholder
        style={styles.titleShimmer}
        ref={textRef}
        stopAutoRun
      />
      <View style={styles.numberViewContainer}>
        <ShimmerPlaceholder
          style={styles.viewShimmer}
          ref={textRef}
          stopAutoRun
        />
        <ShimmerPlaceholder
          style={styles.channelShimmer}
          ref={textRef}
          stopAutoRun
        />
      </View>
    </View>
  );
};

export {CustomShimmer, VideoPlayerShimmer};

const styles = StyleSheet.create({
  videoPlayerShimmerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shimmerVideoStyle: {
    width: '100%',
    height: screenHeight / 3.4,
  },
  loaderStyle: {
    alignItems: 'center',
    position: 'absolute',
  },
  videoImageStyle: {
    width: windowWidth - normalize(40),
    height: windowHeight / 5,
    marginHorizontal: normalize(20),
  },
  numberViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleShimmer: {
    width: windowWidth - normalize(80),
    height: normalize(20),
    marginHorizontal: normalize(20),
    marginTop: normalize(20),
    borderRadius: normalize(10),
  },
  viewShimmer: {
    width: normalize(40),
    height: normalize(40),
    marginRight: normalize(20),
    marginTop: normalize(20),
    borderRadius: normalize(60),
  },
  customShimmerContainer: {
    width: windowWidth * 0.9,
    backgroundColor: COLORS.GREY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(10),
    paddingBottom: normalize(10),
    alignSelf: 'center',
  },
  channelShimmer: {
    width: windowWidth * 0.63,
    height: normalize(20),
    marginTop: normalize(20),
    borderRadius: normalize(10),
  },
});
