import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {mediaJSON} from '../../utils/localData';
import {normalize} from '../../utils/dimension';
import CustomCard from '../../component/customCard';
import {useNavigation} from '@react-navigation/native';
import {CustomShimmer} from '../../component/shimmering';
import {COLORS} from '../../utils/colors';

const VideosList = () => {
  const navigation = useNavigation<any>();
  const [fetching, setfetching] = useState(true);
  const [page, setpage] = useState(mediaJSON.slice(0, 3));

  useEffect(() => {
    setTimeout(() => setfetching(false), 2000);
  }, []);

  const onKeyExtract = (item: any) => {
    return item?.id?.toString();
  };

  const _EndReached = () => {
    if (mediaJSON.length != page.length) {
      [...page, ...mediaJSON.slice(page.length - 1, page.length + 2)];
      setTimeout(() => {
        setpage(p => {
          return [...p, ...mediaJSON.slice(page.length, page.length + 2)];
        });
      });
    }
  };

  const _ListFooter = () => {
    return mediaJSON.length != page.length ? <ActivityIndicator /> : null;
  };
  const renderItems = ({item}: any) => {
    console.log('items', item);
    const onVideoPress = () => {
      navigation.navigate('VideoPlayscreen', {
        item,
      });
    };
    return (
      <View style={styles.renderContainer}>
        {fetching ? (
          <CustomShimmer />
        ) : (
          <CustomCard
            onPress={onVideoPress}
            description={item.description}
            title={item.title}
            sources={item.sources}
            thumb={item.thumb}
            subtitle={item.subtitle}
            duration={'5:40'}
          />
        )}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={page}
        renderItem={renderItems}
        keyExtractor={onKeyExtract}
        showsVerticalScrollIndicator={false}
        bounces={false}
        onEndReached={_EndReached}
        ListFooterComponent={_ListFooter}
        onEndReachedThreshold={0.3}
      />
    </View>
  );
};

export default React.memo(VideosList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.POWDER_BLUE,
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
});
