import * as React from 'react';
import {
    View,
    Text,
    StatusBar,
    Image,
    TextInput,
    Animated,
    TouchableWithoutFeedback,
    Keyboard,
    Dimensions,
} from 'react-native';
import {Main, Colors} from '../styles/';
import {headerHeight} from '../../app.json';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import SerachBar from './_component/SearchBar';

const {width, height} = Dimensions.get('window');
export default class MainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInputIsFocused: false,
            headerHeight: 60,
            logoHeight: 50,
            searchInputHeight: 60,
            scrollY: new Animated.Value(0),
            resultAreaTopPosition: new Animated.Value(height),
            get diffClampScroll() {
                return Animated.diffClamp(this.scrollY, 0, this.searchInputHeight);
            },
            get searchInputTranslateY() {
                return this.diffClampScroll.interpolate({
                    inputRange: [0, this.searchInputHeight],
                    outputRange: [0, -this.searchInputHeight],
                });
            },
            get scrollMarginTop() {
                return this.searchInputHeight + 10;
            },
            get resultAreaPaddingTop() {
                return this.searchInputHeight + this.headerHeight + 10;
            },
        };
    }

    componentDidMount() {
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            this._keyboardDidHide,
        );
    }

    _keyboardDidHide = () => {
        if (this.state.searchInputIsFocused) {
            this.setState({searchInputIsFocused: false});
            Animated.spring(this.state.resultAreaTopPosition, {
                toValue: height,
                duration: 100,
            }).start();
        }
    }

    _onScroll = event => {
        let {y} = event.nativeEvent.contentOffset;
        if (y >= this.state.searchInputHeight) {
            this.state.scrollY.setValue(y);
        }
    }
    _startSearch = () => {
        this.setState({searchInputIsFocused: true});
        Animated.spring(this.state.resultAreaTopPosition, {
            toValue: 0,
            duration: 100,
        }).start();
    }
    _terminateSearch = () => {
        if (this.state.searchInputIsFocused) {
            Keyboard.dismiss();
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
                        <Animated.View style={{
                            position: 'absolute',
                            width,
                            height,
                            top: this.state.resultAreaTopPosition,
                            backgroundColor: '#ffffff',
                            zIndex: 1,
                            elevation: 1,
                            paddingTop: this.state.resultAreaPaddingTop,
                        }}>
                            <Text>1</Text>
                            <Text>2</Text>
                            <Text>3</Text>
                            <Text>4</Text>
                            <Text>5</Text>
                            <Text>6</Text>
                            <Text>7</Text>
                        </Animated.View>
                        <Animated.View style={
                            {
                                ...Main.searchInputWrapper,
                                top: this.state.headerHeight,
                                height: this.state.searchInputHeight,
                                translateY: this.state.searchInputTranslateY,
                            }
                        }
                        >
                            <View style={Main.searchInputContainer}>
                                <Animatable.View
                                    duartion={100}
                                    animation={this.state.searchInputIsFocused ? 'bounceInRight' : 'bounceInLeft'}
                                    style={Main.searchIconWrapper}>
                                    <TouchableWithoutFeedback onPress={() => this._terminateSearch()}>
                                        <Icon
                                            name={this.state.searchInputIsFocused ? "arrow-left" : "search"}
                                            style={Main.searchIcon}/>
                                    </TouchableWithoutFeedback>
                                </Animatable.View>
                                <TextInput
                                    placeholder="انت بتدور علي ايه؟"
                                    style={Main.searchInput}
                                    onFocus={() => this._startSearch()}
                                />

                            </View>
                        </Animated.View>
                    </View>
                    <View style={Main.footer}>
                    </View>
                </View>
            </React.Fragment>
        );
    }
}
