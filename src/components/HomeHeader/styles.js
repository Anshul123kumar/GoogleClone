const { StyleSheet } = require("react-native");

const styles = StyleSheet.create({
    tryNewFeatureIcon: {
        height: 20,
        width: 20,
    },
    profileHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    profileTextBox: {
        borderRadius: 15,
        height: 30,
        width: 30,
        backgroundColor: '#717171',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileText: {
        fontSize: 20,
        color: '#FFF',
    },
    googleHeadingContainer: {
        alignSelf: 'center',
        marginVertical: 40,
    },
    googleHeadingText: {
        fontSize: 36,
        color: '#FFF',
        fontWeight: '500'
    },
    signIncontainer: {
        borderRadius: 8,
        paddingVertical: 4,
        paddingHorizontal: 8,
        backgroundColor: '#717171'
    },
    signInText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#FFF',
    }
});

export default styles;