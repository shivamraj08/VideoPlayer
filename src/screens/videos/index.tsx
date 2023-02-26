import {View, StyleSheet, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {mediaJSON} from '../../utils/localData';
import {normalize} from '../../utils/dimension';
import CustomCard from '../../component/customCard';
import {useNavigation} from '@react-navigation/native';
import {CustomShimmer} from '../../component/shimmering';

const VideosList = () => {
  const navigation = useNavigation<any>();
  const [fetching, setfetching] = useState(true);
  useEffect(() => {
    setTimeout(() => setfetching(false), 5000);
  }, []);
  const renderItems = ({item}: any) => {
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
            time={item.time}
          />
        )}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={mediaJSON}
        renderItem={renderItems}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
};

export default VideosList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  renderContainer: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#fff',
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
