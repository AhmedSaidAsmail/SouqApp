import {StyleSheet} from 'react-native';
import Colors from "./Colors";

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
    header: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: Colors.turbo,
        paddingBottom: 10,
    },
}