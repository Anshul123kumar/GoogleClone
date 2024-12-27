import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  dot1: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4285F4',
  },
  dot2: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
  },
  dot3: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'yellow',
  },
  dot4: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'green',
  },
  dotsContainer: {
    flexDirection: 'row',
    gap: 10
  },
  speakNowText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#717171',
  },
  chevronImage: {
    height: 20,
    width: 20,
    marginTop: 20,
    marginLeft: 20,
  },
  buttonStyle: {
    flexDirection:'row',
    alignItems: 'center',
    gap: 20
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#4285F4',
  },
});

export default styles;