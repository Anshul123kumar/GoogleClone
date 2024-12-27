const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    feedContainer: {
        flex: 1,
        marginTop: 40,
        borderRadius: 20,
        backgroundColor: '#4b4b4b',
        padding: 10
    },
    newsImage: {
        height: 200,
        borderRadius: 10,
        marginBottom: 15
    },
    newsTitle: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '500',
    },
    moreInfoWrapper: {
        marginTop: 15,
        alignSelf: 'flex-start',
    },
    moreInfoText: {
        fontSize: 12,
        fontWeight: '400',
        color: '#b0b0b0'
    },
    itemSeperator: {
        height: 2,
        backgroundColor: '#717171',
        marginLeft: -10,
        marginVertical: 20,
    }
});

export default styles;