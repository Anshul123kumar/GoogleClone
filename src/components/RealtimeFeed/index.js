import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import HomePageContext from '../../context/HomePageContext/HomePageContext';

import styles from './styles';

const RealtimeFeed = () => {
  const {newsData, getNewsData, loading, error} = useContext(HomePageContext);
  useEffect(() => {
    getNewsData();
  }, []);

  const renderItemSeperator = () => {
    return <View style={styles.itemSeperator} />
  }

  const renderNewsComponent = ({item}) => {
    const {title, description, urlToImage, source, publishedAt, url} = item;

    return (
      <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.newsContainer}>
          <Image
            source={{uri: urlToImage}}
            style={styles.newsImage}
            alt="Loading..."
          />
          <Text style={styles.newsTitle}>{title}</Text>
          <View style={styles.moreInfoWrapper}>
            <Text style={styles.moreInfoText}>
              {source.name} {'.'} {publishedAt}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.feedContainer}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={newsData}
          keyExtractor={item => item.source.id}
          renderItem={renderNewsComponent}
          ItemSeparatorComponent={renderItemSeperator}
        />
      )}
    </View>
  );
}

export default RealtimeFeed