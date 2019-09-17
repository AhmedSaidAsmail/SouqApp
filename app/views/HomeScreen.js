import * as React from 'react';
import {
    View,
    Text,
    StatusBar,
    Image,
    Animated,
} from 'react-native';
import {Main, Colors} from '../styles/';

import SearchBar from './_component/SearchBar';

export default class MainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerHeight: 60,
            logoHeight: 50,
            scrollY: new Animated.Value(0),
            get scrollMarginTop() {
                return this.headerHeight + 10;
            },
        };
    }

    _onScroll = event => {
        let {y} = event.nativeEvent.contentOffset;
        if (y >= this.state.headerHeight) {
            this.state.scrollY.setValue(y);
        }
    }

    render() {
        return (
            <React.Fragment>
                <StatusBar backgroundColor={Colors.turbo}/>
                <View style={Main.container}>
                    <View style={{...Main.body}}>
                        <View style={{...Main.header, height: this.state.headerHeight}}>
                            <View style={{...Main.logoWrapper, height: this.state.logoHeight}}>
                                <Image
                                    source={require('../../assets/images/logo2.png')}
                                    style={{height: this.state.logoHeight, resizeMode: 'contain'}}
                                />
                            </View>
                        </View>
                        <Animated.ScrollView
                            bounces={false}
                            scrollEventThrottle={16}
                            onScroll={event => this._onScroll(event)}
                            style={{backgroundColor: 'red', paddingTop: this.state.scrollMarginTop}}
                        >
                            <Text>{JSON.stringify(this.state.searchInputIsFocused)}</Text>
                            <View style={{height: 300, backgroundColor: 'grey', marginBottom: 20}}/>
                            <View style={{height: 300, backgroundColor: 'grey', marginBottom: 20}}/>
                            <View style={{height: 300, backgroundColor: 'grey', marginBottom: 20}}/>
                        </Animated.ScrollView>
                        <SearchBar
                            headerHeight={this.state.headerHeight}
                            scrollY={this.state.scrollY}
                        />
                    </View>
                    <View style={Main.footer}>
                    </View>
                </View>
            </React.Fragment>
        );
    }
}
