import React, {useContext, useEffect, useState} from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import searchIcon from '../../assets/images/searchIcon.png';
import chevronLeft from '../../assets/images/chevronLeft.png'

import styles from './styles';
import SearchPageContext from '../../context/SearchPageContext/SearchPageContext';
import useDebounce from '../../hooks/useDebounce';
import MicroPhoneInput from '../MicroPhoneInput';
import GoogleLensInput from '../GoogleLensInput';
import { Routes } from '../../constants/routes';
import strings from '../../constants/strings';

const GoogleSearchInputBox = ({
  pageName = '',
  placeholder = '',
  onClick = () => {},
}) => {
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();
  const {getSuggestions, voiceText, getVoiceText} =
    useContext(SearchPageContext);

  const debouncedGetSuggestions = useDebounce(getSuggestions, 1000);

  useEffect(() => {
    setSearchText(voiceText);
    debouncedGetSuggestions(voiceText);
  }, [voiceText]);

  const isSearchPage = (pageName === Routes.SEARCH_PAGE || pageName === Routes.IMAGE_SEARCH_PAGE);
  const searchIconStyles = {
    ...styles.searchIconStyles,
    ...(isSearchPage ? styles.searchIconStyles2 : {}),
  };

  const handleTextRecognized = text => {
    setSearchText(text);
    debouncedGetSuggestions(text);
  };

  const handleInputChangeText = value => {
    setSearchText(value);
    debouncedGetSuggestions(value);
  };
  const googleInputBox = () => {
    return (
      <View style={styles.googleInputWrapper}>
        <View
          style={[
            styles.searchIconWrapper,
            isSearchPage && styles.searchIconWrapper2,
          ]}>
          <TouchableOpacity
            onPress={() => {
              isSearchPage && navigation.navigate(Routes.HOME_PAGE);
              getVoiceText('');
            }}>
            <Image
              source={isSearchPage ? chevronLeft : searchIcon}
              style={searchIconStyles}
            />
          </TouchableOpacity>
        </View>
        <TextInput
          onTouchStart={() =>
            pageName === Routes.IMAGE_SEARCH_PAGE
              ? onClick()
              : !isSearchPage && navigation.navigate(Routes.SEARCH_PAGE)
          }
          onChange={() => {}}
          style={[styles.googleInput, isSearchPage && styles.googleInput2]}
          placeholder={placeholder ? placeholder : strings.SEARCH_PLACEHOLDER}
          value={searchText}
          onChangeText={handleInputChangeText}
          placeholderTextColor={'#b0b0b0'}
        />
        <View
          style={[
            styles.rightIconsWrapper,
            isSearchPage && styles.rightIconsWrapper2,
          ]}>
          <MicroPhoneInput
            customStyle={searchIconStyles}
            onTextRecognized={handleTextRecognized}
          />
          <GoogleLensInput customStyle={searchIconStyles} />
        </View>
      </View>
    );
  };
  return googleInputBox();
};

export default GoogleSearchInputBox