import {StyleSheet} from 'react-native';
import Colors from './Colors';
import Fonts from './Fonts';

export default {
    container: {
        flex: 1,
    },
    body: {
        flex: 10,
    },
    footer: {
        flex: 1,
        borderTopWidth: 1,
        borderTopColor: '#000000',
    },
    searchInputWrapper: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 999,
        elevation: 999,
        paddingBottom: 10,
        backgroundColor: Colors.turbo,
    },
    searchInputContainer: {
        backgroundColor: '#ffffff',
        marginHorizontal: 10,
        alignItems: 'stretch',
        flexDirection: 'row-reverse',
        flex: 1,
    },
    searchIconWrapper: {
        flex: 1,
        // backgroundColor: 'red',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    searchIcon: {
        fontSize: 22,
        marginRight: 10,
    },
    searchInput: {
        flex: 10,
        paddingHorizontal: 10,
        textAlign: 'right',
        fontSize: 19,
        fontFamily: Fonts.elMessiriSemiBold,
        // backgroundColor: 'grey',
    },
    header: {
        // ...StyleSheet.absoluteFillObject,
        backgroundColor: Colors.turbo,
        paddingBottom: 10,
        zIndex: 1000,
        elevation: 1000,
    },
    logoWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    mainScroll: {}
}