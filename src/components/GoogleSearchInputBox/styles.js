const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
  googleInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222',
    paddingVertical: 10
  },
  searchIconWrapper: {
    height: 60,
    width: '20%',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: '#555555',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  searchIconWrapper2: {
    height: 50,
  },
  googleInput: {
    height: 60,
    width: '55%',
    backgroundColor: '#555555',
    marginLeft: '-5%',
    color: '#FFF',
  },
  googleInput2: {
    height: 50,
  }, 
  rightIconsWrapper: {
    height: 60,
    width: 60,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: '#555555',
    gap: 20,
    paddingRight: 20,
    flexDirection: 'row',
  },
  rightIconsWrapper2: {
    height: 50,
  },
  searchIconStyles: {
    height: 25,
    width: 25,
  },
  searchIconStyles2: {
    height: 20,
    width: 20,
  },
});

export default styles;