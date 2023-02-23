import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {normalize, screenWidth, vw} from '../utils/dimension';
import {images} from '../utils/images';
import {COLORS} from '../utils/colors';
import {useNavigation} from '@react-navigation/native';
interface customCardType {
  description: any;
  title: any;
  sources: any;
  thumb: any;
  subtitle: any;
  time: any;
}

function CustomCard(props: customCardType) {
  const {description, title, sources, thumb, subtitle, time} = props;
  const navigation = useNavigation<any>();
  //   const onVideoPress = () => {
  //     console.log('first');
  //     navigation.navigate('VideoPlayscreen', {
  //       title: title,
  //       time: time,
  //     });
  //   };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          navigation.navigate('VideoPlayscreen', {
            description: description,
            title: title,
            sources: sources,
            thumb: thumb,
            subtitle: subtitle,
            time: time,
          });
        }}>
        <Image
          source={{uri: thumb}}
          style={styles.videoImage}
          resizeMode="cover"
        />

        <View style={styles.videoDescriptionView}>
          <Text style={styles.titleTextstyle}>{title}</Text>
          <View style={styles.numberOfViews}>
            <Text>{'94K Views '}</Text>
            <Text>{' · '}</Text>
            <Text>{' 3 days ago'}</Text>
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
  numberOfViews: {
    flexDirection: 'row',
    marginTop: normalize(6),
    width: '55%',
    justifyContent: 'space-between',
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
});
