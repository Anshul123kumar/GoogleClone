import React, { useContext } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import tryNewFeatureImage from '../../assets/images/tryNewFeatures.png';
import styles from './styles';
import AuthContext from '../../context/AuthContext/AuthContext';
import strings from '../../constants/strings';

const HomeHeader = () => {

    const {userData, onLogin} = useContext(AuthContext);

    const handleSignIn = () => {
        onLogin();
    }

    const signInOption = () => {
        return (
          <TouchableOpacity style={styles.signIncontainer} onPress={handleSignIn}>
            <Text style={styles.signInText}>{strings.SIGN_IN}</Text>
          </TouchableOpacity>
        );
    }

    const profileHeader = () => {
        return (
          <View style={styles.profileHeaderContainer}>
            <Image
              source={tryNewFeatureImage}
              style={styles.tryNewFeatureIcon}
            />
            {!userData ? (
              signInOption()
            ) : (
              <View style={styles.profileTextBox}>
                <Text style={styles.profileText}>
                  {userData.name[0]}
                </Text>
              </View>
            )}
          </View>
        );
    }
    const titleHeader = () => {
        return (
            <View style={styles.googleHeadingContainer}>
                <Text style={styles.googleHeadingText}>{strings.GOOGLE}</Text>
            </View>
        );
    }
  return (
    <>
        {profileHeader()}
        {titleHeader()}
    </>
  )
}

export default HomeHeader