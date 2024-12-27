import React, { useContext } from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';
import recentSearchImage from '../../assets/images/recentImage.png';
import SearchPageContext from '../../context/SearchPageContext/SearchPageContext';

import styles from './styles';
import strings from '../../constants/strings';

const SuggestionsDropDown = () => {
  const {suggestionsData, loading} = useContext(SearchPageContext);
  
    const renderListHeader = () => {
      return (
        <View style={styles.listHeaderContainer}>
          <Text style={styles.listHeaderTitle}>{strings.RECENT_SEARCHES}</Text>
        </View>
      );
    }
    const renderSuggestion = ({ item }) => {
      return (
        <View style={styles.suggestionContainer}>
            <Image source={recentSearchImage} style={styles.recentSearchImage} />
          <Text style={styles.suggestionText}>{item}</Text>
        </View>
      );
    }
  return (
    <View>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={suggestionsData}
          ListHeaderComponent={renderListHeader}
          keyExtractor={(item, index) => JSON.stringify(item + index)}
          renderItem={renderSuggestion}
        />
      )}
    </View>
  );
}

export default SuggestionsDropDown