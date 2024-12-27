import React from 'react'
import { ScrollView } from 'react-native'
import HomeHeader from '../../components/HomeHeader';
import RealtimeFeed from '../../components/RealtimeFeed';
import styles from './styles';
import GoogleSearchInputBox from '../../components/GoogleSearchInputBox';

const HomePage = () => {
  return (
    <ScrollView
      style={styles.homePageContainer}
      showsVerticalScrollIndicator={false}
      bounces={false} // Disable the bouncing effect
      stickyHeaderIndices={[1]}>
      <HomeHeader />
      <GoogleSearchInputBox pageName={"HomePage"} />
      <RealtimeFeed />
    </ScrollView>
  );
}

export default HomePage