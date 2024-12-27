import React from 'react';
import {Alert, Image, Platform, TouchableOpacity} from 'react-native';
import micIcon from '../../assets/images/mic.png';
import {useNavigation} from '@react-navigation/native';

import {
  request,
  PERMISSIONS,
  RESULTS,
  openSettings,
} from 'react-native-permissions';

const MicroPhoneInput = ({customStyle, onTextRecognized}) => {
  const navigation = useNavigation();

  const requestPermissions = async () => {
    request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.MICROPHONE
        : PERMISSIONS.ANDROID.RECORD_AUDIO,
    )
      .then(result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            Alert.alert('Microphone is not available on this device');
            console.log(
              'This feature is not available (on this device / in this context)',
            );
            break;
          case RESULTS.DENIED:
            openSettings();
            console.log(
              'The permission has not been requested / is denied but requestable',
            );
            break;
          case RESULTS.GRANTED:
            navigation.navigate('SpeechRecognitionPage');
            console.log('The permission is granted');
            break;
          case RESULTS.BLOCKED:
            Alert.alert('Microphone permission is blocked');
            console.log('The permission is denied and not requestable anymore');
            break;
        }
      })
      .catch(error => {
        console.log(`Mic Error ${Platform.OS}`, error);
      });
  };

  const onMicPress = async () => {
    await requestPermissions();
  };

  return (
    <TouchableOpacity onPress={onMicPress}>
      <Image source={micIcon} style={customStyle} />
    </TouchableOpacity>
  );
};

export default MicroPhoneInput;
