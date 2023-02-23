import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {mediaJSON} from '../../utils/localData';
import {normalize} from '../../utils/dimension';
import CustomCard from '../../component/customCard';

const VideosList = () => {
  const renderItems = ({item, index}: any) => {
    console.log('items', item);
    return (
      <View style={styles.renderContainer}>
        <CustomCard
          description={item.description}
          title={item.title}
          sources={item.sources}
          thumb={item.thumb}
          subtitle={item.subtitle}
          time={item.time}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList data={mediaJSON} renderItem={renderItems} />
    </View>
  );
};

export default VideosList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    width: '100%',
    height: normalize(60),
    elevation: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'fff',
  },
  headerStyle: {
    color: '#000',
    fontSize: 16,
    fontWeight: '700',
  },
  renderContainer: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    margin: normalize(10),
    borderRadius: 10,
    flexDirection: 'row',
    // alignItems: 'center',
    // shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 3,
    // paddingHorizontal: normalize(10),
  },
  renderImageStyle: {
    height: normalize(90),
    width: normalize(90),
    borderRadius: 22,
    alignSelf: 'center',
    resizeMode: 'contain',
    backgroundColor: '#eeeeee66',
  },
  brandTextstyle: {
    fontSize: normalize(12),
    color: '#123123',
    letterSpacing: 1,
  },
  nameTextStyle: {
    fontSize: normalize(14),
    color: '#000',
  },
  itemDetailsView: {
    marginHorizontal: normalize(20),
    marginVertical: normalize(20),
    justifyContent: 'space-evenly',
    width: '60%',
  },
  priceTextstyle: {
    fontSize: normalize(12),
    color: '#000',
    fontWeight: '600',
  },
  cartView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize(7),
    justifyContent: 'space-between',
    width: '80%',
  },
  buttonStyle: {
    borderRadius: 7,
    height: normalize(27),
    justifyContent: 'center',
    backgroundColor: 'green',
    alignItems: 'center',
    paddingLeft: normalize(10),
    paddingRight: normalize(10),
  },
  addCartTextstyle: {
    color: '#fff',
    fontSize: normalize(10),
  },
  decreaseQuantity: {
    color: '#fff',
    fontSize: normalize(12),
  },
  increaseQuantity: {
    color: '#fff',
    fontSize: normalize(12),
  },
  quantityTextstyle: {
    textAlign: 'center',
    fontWeight: '600',
  },
  addedItemTextstyle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  bottomCartView: {
    width: '100%',
    height: normalize(60),
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  addItemtoCartView: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  totalTextstyle: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
});
