import React from 'react';
import {Image, Platform, TouchableOpacity} from 'react-native';
import googleLensIcon from '../../assets/images/googleLens.png';
import ImagePicker, { openCamera } from 'react-native-image-crop-picker';
import { useNavigation } from '@react-navigation/native';
import {
  check,
  checkMultiple,
  request,
  PERMISSIONS,
  RESULTS,
  openSettings,
} from 'react-native-permissions';

const GoogleLensInput = ({customStyle}) => {
  const navigation = useNavigation();

  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      multiple: true,
      mediaType: 'photo',
    })
      .then(image => {
        console.log("image", image);
        navigation.navigate('ImageSearchPage', {imageInfo: image});
      })
      .catch(err => {
        console.log(err);
    })
  }

  const requestCameraAccess = () => {
    request(Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA)
      .then(result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              'This feature is not available (on this device / in this context)',
            );
            break;
          case RESULTS.DENIED:
            openSettings();
            console.log('The permission has not been requested / is denied but requestable');
            break;
          case RESULTS.GRANTED:
            checkCameraAccess();
            console.log('The permission is granted');
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  function checkCameraAccess() {
    check(Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA)
      .then(result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              'This feature is not available (on this device / in this context)',
            );
            break;
          case RESULTS.DENIED:
            requestCameraAccess();
            break;
          case RESULTS.GRANTED:
            openCamera();
            break;
          case RESULTS.BLOCKED:
            openSettings();
            break;
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  const handleGoogleLensPress = () => {
    checkCameraAccess();
  };

  return (
    <TouchableOpacity onPress={handleGoogleLensPress}>
      <Image source={googleLensIcon} style={customStyle} />
    </TouchableOpacity>
  );
};

export default GoogleLensInput;
