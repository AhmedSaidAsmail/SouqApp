import * as React from 'react';
import {View, Text, StatusBar, Image} from 'react-native';
import {Main, Colors} from '../styles/';
import {headerHeight} from '../../app.json';

export default class MainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerHeight: 120,
            logoHeight: 50,
            searchInputHeight: 50,
        };
    }

    render() {
        return (
            <React.Fragment>
                <StatusBar backgroundColor={Colors.turbo}/>
                <View style={Main.container}>
                    <View style={Main.body}>
                        <View style={{...Main.header, height: this.state.headerHeight}}>
                            <View style={{
                                height: this.state.logoHeight,
                                justifyContent: 'center',
                                alignItems: 'center',
                                overflow: 'hidden',
                            }}>
                                <Image
                                    source={require('../../assets/images/logo2.png')}
                                    style={{height: this.state.logoHeight, resizeMode: 'contain'}}
                                />
                            </View>
                            <View style={{
                                height: this.state.searchInputHeight,
                                backgroundColor: '#ffffff',
                                marginHorizontal: 10,
                                marginTop: 10,
                            }}>

                            </View>
                        </View>
                    </View>
                    <View style={Main.footer}>
                    </View>
                </View>
            </React.Fragment>
        );
    }
}
