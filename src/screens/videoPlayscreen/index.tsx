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
import CustomControls from '../../component/customControls';
import {STRINGS} from '../../utils/strings';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import Share from 'react-native-share';
const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
function VideoPlayScreen({route}: any) {
  const {item} = route?.params;
  const [changeSource, setChangeSource] = useState(item.sources[0]);
  const [changeTitle, setchangeTitle] = useState(item.title);
  const [changeDescription, setchangeDescription] = useState(item.description);
  const [loaded, setLoaded] = useState(false);
  let dataList = mediaJSON
    .filter(item => item.sources[0] !== changeSource)
    .slice(0, 5);

  const myCustomShare = async () => {
    const shareOptions = {
      message:
        "Order your next meal from FoodFinder App. I've already ordered more than 10 meals on it.",
      // url: files.appLogo,
      // urls: [files.image1, files.image2]
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
    } catch (error) {}
  };
  const handleMapData = () => {
    return dummyImages.map((item, index) => {
      return (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={item?.text == 'Share' ? myCustomShare : null}
          key={index}
          style={styles.reactionContainer}>
          <Image source={item.image} style={styles.likeImageStyle} />
          <Text style={styles.iconTextstyle}>{item.text}</Text>
        </TouchableOpacity>
      );
    });
  };

  const onKeyExtract = (item: any) => {
    return item.id.toString();
  };

  const onrender = ({item}: any) => {
    const handleOnPress = () => {
      setChangeSource(item.sources[0]);
      setchangeTitle(item.title);
      setchangeDescription(item.description);
    };
    return (
      // {loaded?null:()}
      <View style={styles.renderContainer}>
        {/* <ShimmerPlaceholder
          style={{
            height: normalize(100),
            width: normalize(100),
          }}></ShimmerPlaceholder> */}
        <CustomCard
          onPress={handleOnPress}
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
    return (
      <>
        <View style={styles.headerView}>
          <Text style={styles.headerTextstyle}>{changeTitle}</Text>
          <View style={styles.numberOfView}>
            <Text style={styles.noViewText}>{STRINGS.LABEL.K_VIEWS}</Text>
            <Text style={styles.dayTextstyle}>{STRINGS.LABEL.DAYS_AGO}</Text>
          </View>
          <Text style={styles.descriptionTextstyle} numberOfLines={3}>
            {changeDescription}
          </Text>
        </View>
        <View style={styles.mapViewData}>{handleMapData()}</View>
        <View style={styles.channelDetailsView}>
          <Image style={styles.userChannelImage} source={images.womenImage} />
          <View style={styles.channelContainer}>
            <Text style={styles.channelNameTextstyle}>
              {STRINGS.LABEL.TECHNICAL_GURUJI}
            </Text>
            <Text style={styles.subcribersTextstyle}>
              {STRINGS.LABEL.K_SUBCRIBERS}
            </Text>
          </View>
          <TouchableOpacity style={styles.subscribeTouchable}>
            <Text style={styles.buttonSubscribe}>{STRINGS.LABEL.SUBCRIBE}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.commentsView}>
          <View style={styles.commentsInner}>
            {/* <View style={styles.noOfComments}> */}
            <Text style={styles.commentsText}>{STRINGS.LABEL.COMMENTS}</Text>
            <Text style={{marginRight: 220}}>{STRINGS.NUMBER[32]}</Text>
            {/* </View> */}
            <Image source={images.expand} />
          </View>
          <View style={styles.userCommentView}>
            <Image style={styles.commentsUser} source={images.womenImage} />
            <View style={styles.descriptionComment}>
              <Text style={styles.commentUserText} numberOfLines={2}>
                {STRINGS.LABEL.COMMENTS_TEXT}
              </Text>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <CustomControls source={changeSource} />
      <FlatList
        data={dataList}
        renderItem={onrender}
        ListHeaderComponent={detailsComponent}
        keyExtractor={onKeyExtract}
      />
    </View>
  );
}

export default React.memo(VideoPlayScreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    tintColor: COLORS.GREY,
  },
  likeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: normalize(20),
    width: '80%',
    margin: normalize(30),
  },
  descriptionTextstyle: {
    marginTop: normalize(10),
    fontSize: 14,
  },
  renderContainer: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: COLORS.WHITE,
    margin: normalize(10),
    borderRadius: 10,
    flexDirection: 'row',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 3,
  },
  channelContainer: {
    marginRight: normalize(80),
  },
  headerView: {
    marginHorizontal: normalize(20),
    marginTop: normalize(20),
  },
  headerTextstyle: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
  },
  numberOfView: {
    flexDirection: 'row',
    marginTop: normalize(20),
  },
  noViewText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: COLORS.BLACK,
  },
  dayTextstyle: {
    marginLeft: normalize(20),
  },
  iconTextstyle: {
    fontSize: normalize(12),
    marginTop: normalize(5),
    color: COLORS.GREY,
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
  commentsView: {
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(14),
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.GREY,
  },
  commentsInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: normalize(30),
  },
  noOfComments: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    // margin: normalize(15),
  },
  commentsTxt: {
    marginLeft: normalize(20),
  },
  userCommentView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: normalize(10),
  },
  commentsUser: {
    height: normalize(30),
    width: normalize(30),
    borderRadius: normalize(25),
  },
  descriptionComment: {
    flexDirection: 'row',
    width: 0,
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: normalize(14),
  },
  commentUserText: {
    color: COLORS.GREY,
    fontSize: 14,
  },
  commentsText: {
    fontSize: normalize(14),
    color: COLORS.BLACK,
    fontWeight: '700',
  },
  reactionContainer: {
    alignItems: 'center',
  },
});
