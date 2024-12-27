import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import HomePageProvider from './context/HomePageContext/HomePageProvider';
import SearhPageProvider from './context/SearchPageContext/SearchPageProvider';
import AuthProvider from './context/AuthContext/AuthProvider';
import SpeechRecognitionPage from './pages/SpeechRecognitionPage';
import { Routes } from './constants/routes';
import ImageSearchPage from './pages/ImageSearchPage';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {

  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? 'dark' : 'light';

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
          <AuthProvider>
            <HomePageProvider>
              <SearhPageProvider>
                <Stack.Navigator
                  screenOptions={{
                    contentStyle: {backgroundColor: '#222'},
                    headerShown: false,
                  }}>
                  <Stack.Screen name={Routes.HOME_PAGE} component={HomePage} />
                  <Stack.Screen
                    name={Routes.SEARCH_PAGE}
                    component={SearchPage}
                  />
                  <Stack.Screen
                    name={Routes.SPEECH_RECOGNITION_PAGE}
                    component={SpeechRecognitionPage}
                  />
                  <Stack.Screen
                    name={Routes.IMAGE_SEARCH_PAGE}
                    component={ImageSearchPage}
                  />
                </Stack.Navigator>
              </SearhPageProvider>
            </HomePageProvider>
          </AuthProvider>
        </SafeAreaView>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
