import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {normalize, vh, vw} from '../../utils/dimension';
import {COLORS} from '../../utils/colors';
import {images} from '../../utils/images';
import {dummyImages} from '../../utils/imageData';
import CustomCard from '../../component/customCard';
import {mediaJSON} from '../../utils/localData';
import CustomControls from '../../component/customControls';
import {STRINGS} from '../../utils/strings';
import Share from 'react-native-share';
function VideoPlayScreen({route}: any) {
  const {item} = route?.params;
  const [changeSource, setChangeSource] = useState(item.sources[0]);
  const [changeTitle, setchangeTitle] = useState(item.title);
  const [changeDescription, setchangeDescription] = useState(item.description);
  let dataList = mediaJSON
    .filter(item => item.sources[0] !== changeSource)
    .slice(0, 5);

  const myCustomShare = async () => {
    const shareOptions = {
      message:
        "Order your next meal from FoodFinder App. I've already ordered more than 10 meals on it.",
    };

    try {
      const ShareResponse = await Share.open(shareOptions);
    } catch (error) {}
  };

  /**
   *
   * @returns return emoji reaction
   */
  const handleMapData = () => {
    return dummyImages.map((item, index) => {
      return (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={item?.text == 'Share' ? myCustomShare : () => {}}
          key={index}
          style={styles.reactionContainer}>
          <Image source={item.image} style={styles.likeImageStyle} />
          <Text style={styles.iconTextstyle}>{item.text}</Text>
        </TouchableOpacity>
      );
    });
  };

  /**
   *
   * @param item
   * @returns return keys
   */
  const onKeyExtract = (item: any) => {
    return item.id.toString();
  };

  /**
   *
   * @param param0
   * @returns return a render flatlist
   */
  const onrender = ({item}: any) => {
    const handleOnPress = () => {
      setChangeSource(item.sources[0]);
      setchangeTitle(item.title);
      setchangeDescription(item.description);
    };
    return (
      <View style={styles.renderContainer}>
        <CustomCard
          onPress={handleOnPress}
          title={item.title}
          description={item.description}
          sources={item.sources}
          thumb={item.thumb}
          subtitle={item.subtitle}
        />
      </View>
    );
  };

  const detailsComponent = () => {
    return (
      <>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTextstyle}>{changeTitle}</Text>
          <View style={styles.numberOfViewsContainer}>
            <Text>{STRINGS.LABEL.K_VIEWS}</Text>
            <Text>{'·'}</Text>
            <Text>{STRINGS.LABEL.DAYS_AGO}</Text>
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
        <View style={styles.commentContainer}>
          <View style={styles.commentsInner}>
            <Text style={styles.commentsText}>{STRINGS.LABEL.COMMENTS}</Text>
            <Text style={styles.countComment}>{STRINGS.NUMBER.THIRTY_TWO}</Text>
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
        <View style={styles.similarTextContainer}>
          <Text style={styles.similarText}>{STRINGS.LABEL.SIMILAR_VIDEOS}</Text>
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
        showsVerticalScrollIndicator={false}
        bounces={false}
      />
    </View>
  );
}

export default React.memo(VideoPlayScreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  similarText: {
    fontSize: normalize(14),
    fontWeight: '800',
  },
  similarTextContainer: {
    marginTop: normalize(30),
    marginHorizontal: normalize(20),
  },
  likeImageStyle: {
    height: normalize(25),
    width: normalize(25),
    resizeMode: 'cover',
    tintColor: COLORS.GREY,
  },
  countComment: {
    marginRight: '58%',
  },
  descriptionTextstyle: {
    marginTop: normalize(10),
    fontSize: normalize(12),
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
  headerContainer: {
    marginHorizontal: normalize(20),
    marginTop: normalize(20),
  },
  headerTextstyle: {
    fontSize: normalize(16),
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
  },
  numberOfViewsContainer: {
    flexDirection: 'row',
    marginTop: normalize(6),
    width: '49%',
    justifyContent: 'space-evenly',
  },
  noViewText: {
    fontSize: normalize(14),
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
    fontWeight: '700',
    fontSize: normalize(10),
  },
  subscribeTouchable: {
    backgroundColor: COLORS.AQUA,
    width: '30%',
    borderRadius: normalize(20),
    height: normalize(27),
    justifyContent: 'center',
    alignItems: 'center',
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
  commentContainer: {
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
    fontSize: normalize(14),
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
