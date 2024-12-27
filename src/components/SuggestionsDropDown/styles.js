const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    listHeaderContainer: {
        marginLeft: 15,
        marginBottom: 20,
        marginTop: 5,
    },
  listHeaderTitle: {
    fontSize: 12,
    color: '#b0b0b0',
    fontWeight: '500'
  },
  suggestionContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    gap: 15,
  },
  suggestionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFF',
  },
  recentSearchImage: {
    height: 20,
    width: 20,
  },
});

export default styles;