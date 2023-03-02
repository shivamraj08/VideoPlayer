import {View, TouchableOpacity, Image, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import Video from 'react-native-video';
import {StyleSheet, StatusBar} from 'react-native';
import {normalize, screenHeight, screenWidth} from '../utils/dimension';
import {Dimensions} from 'react-native';
import {images} from '../utils/images';
import PlayerControls from './playerControls';
import ProgressBar from './progressBar';
import Orientation from 'react-native-orientation-locker';
import {useNavigation} from '@react-navigation/native';
import {VideoPlayerShimmer} from './shimmering';

interface customVideoType {
  source: any;
}
const windowHeight = Dimensions.get('window').width * (9 / 12);
const windowWidth = Dimensions.get('window').height;

const CustomControls = (props: customVideoType) => {
  const {source} = props;
  const videoRef = React.useRef<any>();
  const navigation = useNavigation<any>();
  const [play, setPlay] = useState(true);
  const [duration, setDuration] = useState(0);
  const [fetching, setfetching] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControl, setShowControl] = useState(true);
  const [currOrientation, setOrientation] = useState('PORTRAIT');
  const [videoStyle, setVideoStyle] = useState<any>(styles.initialVideoStyle);

  useEffect(() => {
    setTimeout(() => setfetching(false), 2000);
  }, []);

  useEffect(() => {
    Orientation.getOrientation(orientation => {
      if (orientation.includes('LANDSCAPE')) {
        Orientation.lockToPortrait();
      }
    });
    Orientation.addLockListener(orientation => setOrientation(orientation));
    return () => {
      Orientation.unlockAllOrientations();
      Orientation.removeLockListener(handleFullScreen);
    };
  }, []);

  const handleFullScreen = () => {
    if (currOrientation.includes('LANDSCAPE')) {
      Orientation.lockToPortrait();
      setVideoStyle(styles.initialVideoStyle);
    } else {
      Orientation.lockToLandscape();
      setVideoStyle(styles.fullScreenVideoStyle);
    }
  };

  const handlePlay = () => {
    setPlay(true);
  };
  const handlePause = () => {
    if (play) {
      setPlay(false);
      return;
    }
    setPlay(true);
  };

  const handleSkipForward = () => {
    videoRef.current.seek(currentTime + 10);
    setCurrentTime(currentTime + 10);
  };
  const handleSkipBackward = () => {
    videoRef.current.seek(currentTime - 10);
    setCurrentTime(currentTime - 10);
  };

  const handlePlayPause = () => {
    if (play) {
      setPlay(false);
      setShowControl(true);
      return;
    }
    setTimeout(() => setShowControl(false), 2000);
    setPlay(true);
  };

  const hiddenControls = () => {
    setShowControl(false);
    setTimeout(() => setShowControl(true), 2000);
  };

  const handleBackButton = () => {
    if (videoStyle.height === screenWidth) {
      Orientation.lockToPortrait();
      setVideoStyle(styles.initialVideoStyle);
    } else {
      navigation.goBack();
    }
  };
  const onLoadEnd = (data: any) => {
    setDuration(data.duration);
    setCurrentTime(data.currentTime);
  };

  const onProgress = (data: any) => {
    setCurrentTime(data.currentTime);
  };

  const onSeek = (data: any) => {
    videoRef.current.seek(data.seekTime);
    setCurrentTime(data.seekTime);
  };

  const onEnd = () => {
    setPlay(false);
    videoRef.current.seek(0);
  };

  return (
    <View style={videoStyle}>
      {fetching ? (
        <VideoPlayerShimmer />
      ) : (
        <Video
          source={{uri: source}}
          style={styles.videoContainer}
          muted={false}
          controls={false}
          paused={!play}
          resizeMode="cover"
          ref={videoRef}
          onLoad={onLoadEnd}
          onProgress={onProgress}
          onEnd={onEnd}
          playInBackground={false}
          playWhenInactive={false}
        />
      )}

      {showControl && (
        <React.Fragment>
          <TouchableOpacity
            onPress={hiddenControls}
            style={styles.controlOverPlay}>
            <View
              style={[
                styles.customControlContainer,
                {
                  top:
                    currOrientation === 'PORTRAIT'
                      ? normalize(-35)
                      : normalize(-110),
                },
              ]}>
              <TouchableOpacity onPress={handleBackButton}>
                <Image
                  style={styles.backArrowStyle}
                  source={images.backArrow}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={styles.menuStyle} source={images.menu} />
              </TouchableOpacity>
            </View>
            <PlayerControls
              onPlay={handlePlay}
              onPause={handlePause}
              playing={play}
              skipForwards={handleSkipForward}
              skipBackwards={handleSkipBackward}
            />

            <ProgressBar
              currentTime={currentTime}
              duration={duration > 0 ? duration : 0}
              onSlideStart={handlePlayPause}
              onSlideComplete={handlePlayPause}
              onSlideCapture={onSeek}
              containerStyle={{
                bottom:
                  videoStyle.height === screenWidth
                    ? normalize(30)
                    : normalize(15),
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleFullScreen}
            hitSlop={styles.fullScreenHitSlop}
            style={[
              styles.fullscreenButton,
              {
                right:
                  currOrientation === 'PORTRAIT'
                    ? normalize(25)
                    : normalize(50),
                bottom:
                  currOrientation === 'PORTRAIT'
                    ? normalize(20)
                    : normalize(40),
              },
            ]}>
            <Image source={images.fullScreen} />
          </TouchableOpacity>
        </React.Fragment>
      )}
    </View>
  );
};

export default React.memo(CustomControls);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  videoContainer: {
    height: '100%',
    width: '100%',
    flex: 1,
  },
  backArrowStyle: {
    height: normalize(20),
    width: normalize(20),
    resizeMode: 'contain',
  },
  menuStyle: {
    height: normalize(20),
    width: normalize(20),
    resizeMode: 'contain',
  },
  customControlContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: normalize(10),
    width: '90%',
    alignSelf: 'center',
  },
  fullScreenVideoStyle: {
    height: screenWidth,
    width: screenHeight,
    backgroundColor: 'black',
  },
  fullScreenHitSlop: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
  fullscreenContainer: {
    flex: 1,
    backgroundColor: '#ebebeb',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 5,
  },
  initialVideoStyle: {
    width: screenWidth,
    height: screenHeight / 3.2,
  },
  video: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: 'black',
  },
  fullscreenVideo: {
    flex: 1,
    height: screenHeight,
    width: screenWidth,
    backgroundColor: 'black',
  },
  text: {
    marginTop: normalize(30),
    marginHorizontal: normalize(20),
    fontSize: normalize(15),
    textAlign: 'justify',
  },
  fullscreenButton: {
    position: 'absolute',
    zIndex: 1,
  },
  controlOverPlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    zIndex: 1,
  },
});
