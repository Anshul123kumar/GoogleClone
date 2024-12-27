import React from 'react';
import { View } from 'react-native';
import GoogleSearchInputBox from '../../components/GoogleSearchInputBox';
import SuggestionsDropDown from '../../components/SuggestionsDropDown';

const SearchPage = () => {
  return (
    <View>
        <GoogleSearchInputBox pageName={"SearchPage"} />
        <SuggestionsDropDown />
    </View>
  )
}

export default SearchPage