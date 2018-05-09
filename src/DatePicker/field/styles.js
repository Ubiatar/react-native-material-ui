import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
    inputContainer: {
        backgroundColor: 'transparent'
    },

    input: {
        top: 2,
        padding: 0,
        margin: 0,
        flex: 1,
        fontFamily: 'Raleway-Regular'
    },

    row: {
        flexDirection: 'row'
    },

    flex: {
        flex: 1
    },
    dateWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    dateFieldWrapper: {
        flex: 4
    },
    iconWrapper: {
        flex: 1
    },

    accessory: {
        top: 2,
        justifyContent: 'center',
        alignSelf: 'flex-start',
    },

    modalOutside: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    modalInside: {
        width: '90%',
        height: 350,
        backgroundColor: 'white',
        borderRadius: 20,
        marginBottom: 20,
        justifyContent: 'space-around'
    }
});
