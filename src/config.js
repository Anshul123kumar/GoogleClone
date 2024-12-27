import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { GOOGLE_WEB_CLIENT_ID, GOOGLE_IOS_CLIENT_ID } from '@env';

GoogleSignin.configure({
  webClientId: GOOGLE_WEB_CLIENT_ID,
  // androidClientId: GOOGLE_ANDROID_CLIENT_ID,
  iosClientId: GOOGLE_IOS_CLIENT_ID,
  offlineAccess: true,
  scopes: ['profile', 'email', 'https://www.googleapis.com/auth/drive'],
  forceCodeForRefreshToken: true,
  profileImageSize: 120
});

export default GoogleSignin;