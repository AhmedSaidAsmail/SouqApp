import {StyleSheet, Dimensions} from 'react-native';
import Colors from './Colors';
import Fonts from './Fonts';

const {width, height} = Dimensions.get('window');
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
        borderTopColor: Colors.aspestos,
        flexDirection: 'row-reverse',
        paddingHorizontal: 10,
    },
    footerPart: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerIcon: {
        fontSize: 25,
        fontWeight: 900,
    },
    footerIconActive: {
        color: Colors.pumpkin,
    },
    footerText: {
        fontFamily: Fonts.elMessiriBold,
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
    },
    resultArea: {
        position: 'absolute',
        width,
        height,
        backgroundColor: '#ffffff',
        zIndex: 1,
        elevation: 1,
        paddingTop: 20,
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