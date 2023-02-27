import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {normalize, screenWidth, vw} from '../utils/dimension';
import {images} from '../utils/images';
import {COLORS} from '../utils/colors';
import {useNavigation} from '@react-navigation/native';
import {STRINGS} from '../utils/strings';
interface customCardType {
  description: any;
  title: any;
  sources: any;
  thumb: any;
  subtitle: any;
  onPress: any;
}

function CustomCard(props: customCardType) {
  const {title, thumb, subtitle, onPress} = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <Image
          source={{uri: thumb}}
          style={styles.videoImage}
          resizeMode="cover"
        />
        <View style={styles.durationVideoView}>
          <Text style={styles.timeText}>{STRINGS.NUMBER.DURATION}</Text>
        </View>
        <Image source={images.videoPlay} style={styles.playImage} />
        <View style={styles.videoDescriptionView}>
          <Text style={styles.titleTextstyle}>{title}</Text>
          <View style={styles.numberOfViewsContainer}>
            <Text>{STRINGS.LABEL.K_VIEWS}</Text>
            <Text>{'·'}</Text>
            <Text>{STRINGS.LABEL.DAYS_AGO}</Text>
          </View>
          <View style={styles.userChannelView}>
            <Image source={images.womenImage} style={styles.userImageStyle} />
            <Text style={styles.subtitleTextstyle}>{subtitle}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default React.memo(CustomCard);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: normalize(8),
    overflow: 'hidden',
  },
  videoImage: {
    height: screenWidth / 2,
    width: '100%',
  },
  videoDescriptionView: {
    padding: normalize(12),
  },
  titleTextstyle: {
    fontSize: normalize(16),
    fontWeight: '600',
  },
  numberOfViewsContainer: {
    flexDirection: 'row',
    marginTop: normalize(6),
    width: '49%',
    justifyContent: 'space-around',
  },
  userChannelView: {
    flexDirection: 'row',
    marginTop: normalize(6),
  },
  userImageStyle: {
    height: vw(30),
    width: vw(30),
    resizeMode: 'cover',
    borderRadius: normalize(20),
    justifyContent: 'flex-start',
  },
  subtitleTextstyle: {
    fontSize: normalize(16),
    fontWeight: '600',
    color: COLORS.GREY,
    marginLeft: normalize(15),
    marginTop: normalize(8),
  },
  playImage: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: normalize(80),
  },
  durationVideoView: {
    position: 'absolute',
    backgroundColor: '#161616',
    padding: normalize(6),
    width: normalize(60),
    height: normalize(30),
    alignItems: 'center',
    opacity: 0.6,
    borderRadius: normalize(7),
    top: screenWidth / 2.5,
    right: normalize(5),
  },
  timeText: {
    color: COLORS.WHITE,
  },
});
