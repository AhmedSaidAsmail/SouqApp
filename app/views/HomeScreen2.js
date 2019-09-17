import * as React from 'react';
import {View, Text, StatusBar, Image, TextInput} from 'react-native';
import {Main, Colors, Fonts} from '../styles/';
import {headerHeight} from '../../app.json';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class MainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerHeight: 60,
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
                                position: 'absolute',
                                top: "100%",
                                left: 0,
                                right: 0,
                                height: this.state.searchInputHeight,
                                backgroundColor: Colors.turbo,
                            }}>
                            </View>
                            <View style={{
                                position: 'absolute',
                                top: "100%",
                                left: 0,
                                right: 0,
                                backgroundColor: 'blue',
                                height: this.state.searchInputHeight,
                                // backgroundColor: '#ffffff',
                                marginHorizontal: 10,
                                marginTop: 10,
                                alignItems: 'center',
                                flexDirection: 'row-reverse',
                            }}>
                                <Icon name="search" style={{fontSize: 22, marginRight: 10}}/>
                                <TextInput
                                    placeholder="انت بتدور علي ايه؟"
                                    style={{
                                        flex: 1,
                                        paddingHorizontal: 10,
                                        textAlign: 'right',
                                        fontSize: 19,
                                        fontFamily: Fonts.elMessiriSemiBold,
                                    }}
                                />

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
