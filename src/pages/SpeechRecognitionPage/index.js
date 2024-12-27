import React, {useContext, useEffect, useRef, useState} from 'react';
import styles from './styles';
import {Animated, Image, Text, TouchableOpacity, View} from 'react-native';
import chevron from '../../assets/images/chevronLeft.png';
import {useNavigation} from '@react-navigation/native';

import Voice, {
  SpeechRecognizedEvent,
  SpeechResultsEvent,
  SpeechErrorEvent,
} from '@react-native-voice/voice';
import SearchPageContext from '../../context/SearchPageContext/SearchPageContext';
import strings from '../../constants/strings';

const SpeechRecognitionPage = () => {
  const dot1 = useRef(new Animated.Value(0)).current;
  const dot2 = useRef(new Animated.Value(0)).current;
  const dot3 = useRef(new Animated.Value(0)).current;
  const dot4 = useRef(new Animated.Value(0)).current;

  const [recognized, setRecognized] = useState('');
  const [pitch, setPitch] = useState('');
  const [error, setError] = useState('');
  const [end, setEnd] = useState('');
  const [started, setStarted] = useState('');
  const [results, setResults] = useState([]);
  const [partialResults, setPartialResults] = useState([]);

  const {getVoiceText} = useContext(SearchPageContext);

  const navigation = useNavigation();

  const animateDot = (dot, delay) => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(dot, {
          toValue: -20,
          duration: 400,
          delay,
          useNativeDriver: true,
        }),
        Animated.timing(dot, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  useEffect(() => {
    animateDot(dot1, 0);
    animateDot(dot2, 200);
    animateDot(dot3, 400);
    animateDot(dot4, 600);
    startRecognizing();
  }, []);

  useEffect(() => {
    Voice.onSpeechStart = e => {
      console.log('speech started', e);
      setStarted('√');
    };

    Voice.onSpeechRecognized = e => {
      console.log('speech recognized', e);
      setRecognized('√');
    };

    Voice.onSpeechEnd = e => {
      console.log('speech end', e);
      setEnd('√');
    };

    Voice.onSpeechError = e => {
      console.log('speech error', e);
      setError(JSON.stringify(e.error));
    };

    Voice.onSpeechPartialResults = e => {
      console.log('speech partial results', e);
      setPartialResults(e.value);
    };

    Voice.onSpeechVolumeChanged = e => {
      // console.log("speech volume changed", e);
      setPitch(e.value);
    };

    Voice.onSpeechResults = e => {
      console.log('speech results', e);
      setResults(e.value);
      getVoiceText(e.value[0]);
    };

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  // const resetStates = () => {
  //   setRecognized('');
  //   setPitch('');
  //   setError('');
  //   setStarted('');
  //   setResults([]);
  //   setPartialResults([]);
  //   setEnd('');
  // };

  const startRecognizing = async () => {
    try {
      await Voice.start('en-US');
    } catch (e) {
      console.error('start recognization error', e);
    }
  };

  // const startRecognizingWithTimeout = async () => {
  //   console.log('start recognizing');
  //   try {
  //     await Voice.start('en-US');
  //     setTimeout(() => {
  //       Voice.stop();
  //     }, 3000);
  //   } catch (e) {
  //     console.error('Timeout error', e);
  //   }
  // };

  const stopRecognizing = async () => {
    try {
      await Voice.stop();
      navigation.goBack();
    } catch (e) {
      console.error('stop recognition error', e);
    }
  };

  const cancelRecognizing = async () => {
    try {
      await Voice.cancel();
      getVoiceText('');
      navigation.goBack();
    } catch (e) {
      console.error('cancel recording error', e);
    }
  };

  // const destroyRecognizer = async () => {
  //   try {
  //     await Voice.destroy();
  //   } catch (e) {
  //     console.error('destroy recongnition error', e);
  //   }

  //   resetStates();
  // };

  const renderBottomButtons = () => {
    return (
      <View style={styles.buttonStyle}>
        <TouchableOpacity onPress={stopRecognizing}>
          <Text style={styles.buttonText}>{strings.STOP}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={cancelRecognizing}>
          <Text style={styles.buttonText}>{strings.CANCEL}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <TouchableOpacity onPress={handleBackPress}>
        <Image source={chevron} style={styles.chevronImage} />
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.speakNowText}>{strings.SPEAK_NOW}</Text>
        <View style={styles.dotsContainer}>
          <Animated.View
            style={[styles.dot1, {transform: [{translateY: dot1}]}]}
          />
          <Animated.View
            style={[styles.dot2, {transform: [{translateY: dot2}]}]}
          />
          <Animated.View
            style={[styles.dot3, {transform: [{translateY: dot3}]}]}
          />
          <Animated.View
            style={[styles.dot4, {transform: [{translateY: dot4}]}]}
          />
        </View>
        <Text style={styles.speakNowText}>{partialResults[0]}</Text>
        {renderBottomButtons()}
      </View>
    </>
  );
};

export default SpeechRecognitionPage;
