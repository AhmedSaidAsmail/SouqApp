import * as React from 'react';
import {
    View,
    Text,
    StatusBar,
    Image,
    TextInput,
    ScrollView,
    Animated,
    StyleSheet
} from 'react-native';

export default class Testing extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.firstDiv}>
                    <TextInput style={styles.input}/>
                </View>
                <View style={styles.secondDiv}>
                    <Text>test</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    firstDiv: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 90,
        backgroundColor: 'red',
        zIndex: 100,
        elevation: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 50,
        width: 150,
        backgroundColor: 'white',
        position: 'absolute',
        zIndex: 100,
        elevation: 100,
    },
    secondDiv: {
        height: 300,
        backgroundColor: 'blue',
    },
});
