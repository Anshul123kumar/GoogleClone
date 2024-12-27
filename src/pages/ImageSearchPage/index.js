import React from 'react';
import {Dimensions, Image, View} from 'react-native';
import GoogleSearchInputBox from '../../components/GoogleSearchInputBox';
import styles from './styles';
import { Routes } from '../../constants/routes';

const ImageSearchPage = ({navigation, route}) => {
  const {imageInfo} = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={{uri: imageInfo?.path}}
        height={300}
        width={Dimensions.get('screen').width - 32}
      />
      <GoogleSearchInputBox
        pageName="ImageSearchPage"
        placeholder={'Add to your Search'}
        onClick={() => navigation.navigate(Routes.SEARCH_PAGE)}
      />
      {/* <SearchResults /> */}
    </View>
  );
};

export default ImageSearchPage;
