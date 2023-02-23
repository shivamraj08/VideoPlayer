import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {normalize, screenWidth, vh, vw} from '../../utils/dimension';
import {COLORS} from '../../utils/colors';
import {images} from '../../utils/images';
import {dummyImages} from '../../utils/imageData';
import CustomCard from '../../component/customCard';
import {mediaJSON} from '../../utils/localData';

export default function VideoPlayScreen(route: any) {
  console.log('48384539458954', route.params);
  const {title, time} = route;
  console.log('params', title, time);
  const data = dummyImages;

  const handleMapData = () => {
    return dummyImages.map(item => {
      return (
        <TouchableOpacity activeOpacity={0.7} style={{alignItems: 'center'}}>
          <Image source={item.image} style={styles.likeImageStyle} />
          <Text style={styles.iconTextstyle}>{item.text}</Text>
        </TouchableOpacity>
      );
    });
  };
  const onrender = ({item}: any) => {
    console.log('-->', item);
    return (
      <View style={{margin: normalize(10)}}>
        <CustomCard
          title={item.title}
          description={item.description}
          sources={item.sources}
          thumb={item.thumb}
          subtitle={item.subtitle}
          time={item.time}
        />
      </View>
    );
  };

  const detailsComponent = () => {
    console.log('kfhilhfereiriheriu');
    return (
      <>
        <View style={styles.headerView}>
          <Text style={styles.headerTextstyle}>
            {'How to play PUBG Mobile on emulator'}
          </Text>
          <View style={styles.numberOfView}>
            <Text style={styles.viewsTxt}>{'94k views'}</Text>
            <Text style={styles.dayTextstyle}>{'3 days ago'}</Text>
          </View>
          <Text style={{marginTop: normalize(10), fontSize: 14}}>
            {
              'Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him'
            }
          </Text>
        </View>
        <View style={styles.mapViewData}>{handleMapData()}</View>
        <View style={styles.channelDetailsView}>
          <Image style={styles.userChannelImage} source={images.womenImage} />
          <View style={{marginRight: normalize(80)}}>
            <Text style={styles.channelNameTextstyle}>
              {'Technical Guruji'}
            </Text>
            <Text style={styles.subcribersTextstyle}>{'15k Subcribers'}</Text>
          </View>
          <TouchableOpacity style={styles.subscribeTouchable}>
            <Text style={styles.buttonSubscribe}>{'Subscribe'}</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.videoContainer}></View>

      <FlatList
        data={mediaJSON}
        renderItem={onrender}
        ListHeaderComponent={detailsComponent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  numberOfViews: {
    flexDirection: 'row',
    marginTop: normalize(6),
    width: '55%',
    justifyContent: 'space-between',
    color: COLORS.GREY,
  },
  likeImageStyle: {
    height: normalize(25),
    width: normalize(25),
    resizeMode: 'cover',
    tintColor: '#606060',
  },
  likeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: normalize(20),
    width: '80%',
    margin: normalize(30),
  },
  videoContainer: {
    width: screenWidth,
    height: normalize(200),
    borderWidth: 1,
    alignSelf: 'center',
  },
  headerView: {
    marginHorizontal: normalize(20),
    marginTop: normalize(20),
    // flexDirection: 'row',
  },
  headerTextstyle: {
    fontSize: 16,
    // fontFamily: 'Poppins-Bold',
    fontWeight: '700',
  },
  numberOfView: {
    flexDirection: 'row',
    // marginHorizontal: normalize(20),
    marginTop: normalize(20),
  },
  viewsTxt: {
    fontSize: 14,
    // fontFamily: 'Poppins-Regular',
    color: COLORS.BLACK,
  },
  dayTextstyle: {
    marginLeft: normalize(20),
  },
  iconTextstyle: {
    fontSize: normalize(12),
    marginTop: normalize(5),
    color: '#606060',
  },
  userImageStyle: {
    height: vw(30),
    width: vw(30),
    resizeMode: 'cover',
    borderRadius: normalize(20),
  },
  userChannelImage: {
    height: vw(40),
    width: vw(40),
    borderRadius: vw(20),
  },
  channelNameTextstyle: {
    color: COLORS.BLACK,
    fontSize: normalize(14),
    fontWeight: '700',
  },
  subcribersTextstyle: {
    color: COLORS.GREY,
  },
  buttonSubscribe: {
    color: COLORS.WHITE,
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    marginTop: normalize(5),
    fontSize: normalize(10),
  },
  subscribeTouchable: {
    backgroundColor: COLORS.AQUA,
    width: '30%',
    borderRadius: normalize(20),
    height: normalize(25),
  },
  mapViewData: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: normalize(20),
  },
  channelDetailsView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: normalize(10),
    justifyContent: 'space-between',
    borderTopWidth: 0.2,
    borderTopColor: COLORS.GREY,
    borderBottomColor: COLORS.GREY,
    borderBottomWidth: 0.2,
    height: vh(90),
    marginTop: vh(20),
  },
});
